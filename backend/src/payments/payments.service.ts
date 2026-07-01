import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Payment, PaymentStatus } from '@prisma/client';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.PaymentUncheckedCreateInput): Promise<Payment> {
    const invoice = await this.prisma.invoice.findUnique({ where: { id: data.invoiceId }, include: { payments: true } });
    if (!invoice) throw new BadRequestException('Invoice not found');

    const totalPaid = invoice.payments.reduce((sum, p) => sum + p.amount, 0) + data.amount;
    const isFullyPaid = totalPaid >= invoice.amount;

    // Create payment and update invoice status in a transaction
    return this.prisma.$transaction(async (prisma) => {
      const payment = await prisma.payment.create({ data });
      
      await prisma.invoice.update({
        where: { id: data.invoiceId },
        data: { status: isFullyPaid ? PaymentStatus.PAID : PaymentStatus.PARTIAL }
      });

      return payment;
    });
  }

  async findAll(): Promise<Payment[]> {
    return this.prisma.payment.findMany({
      include: { invoice: { include: { guest: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }
}
