import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Order } from '@prisma/client';

@Injectable()
export class OrdersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.OrderUncheckedCreateInput): Promise<Order> {
    return this.prisma.order.create({ data });
  }

  async chargeToRoom(orderData: Prisma.OrderUncheckedCreateInput, invoiceId: string): Promise<Order> {
    const invoice = await this.prisma.invoice.findUnique({ where: { id: invoiceId } });
    if (!invoice) throw new BadRequestException('Invoice not found');

    return this.prisma.$transaction(async (prisma) => {
      // Create the order linked to the invoice
      const order = await prisma.order.create({
        data: {
          ...orderData,
          invoiceId
        }
      });

      // Update the invoice total amount
      await prisma.invoice.update({
        where: { id: invoiceId },
        data: {
          amount: { increment: order.totalAmount }
        }
      });

      return order;
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: { items: { include: { menuItem: true } }, invoice: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string): Promise<Order | null> {
    return this.prisma.order.findUnique({
      where: { id },
      include: { items: { include: { menuItem: true } }, invoice: true },
    });
  }

  async update(id: string, data: Prisma.OrderUpdateInput): Promise<Order> {
    return this.prisma.order.update({
      where: { id },
      data,
    });
  }
}
