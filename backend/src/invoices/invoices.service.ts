import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Invoice } from '@prisma/client';

@Injectable()
export class InvoicesService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.InvoiceUncheckedCreateInput): Promise<Invoice> {
    return this.prisma.invoice.create({ data });
  }

  async findAll(): Promise<Invoice[]> {
    return this.prisma.invoice.findMany({
      include: { guest: true, payments: true, reservation: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string): Promise<Invoice | null> {
    const invoice = await this.prisma.invoice.findUnique({
      where: { id },
      include: { guest: true, payments: true, reservation: true }
    });
    if (!invoice) throw new NotFoundException('Invoice not found');
    return invoice;
  }

  async update(id: string, data: Prisma.InvoiceUpdateInput): Promise<Invoice> {
    return this.prisma.invoice.update({
      where: { id },
      data
    });
  }
}
