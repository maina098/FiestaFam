import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PaymentStatus } from '@prisma/client';

@Injectable()
export class ReportsService {
  constructor(private prisma: PrismaService) {}

  async generateFinancialReport(startDate?: string, endDate?: string) {
    // Basic implementation: fetch all invoices and payments. In real app, filter by dates.
    const invoices = await this.prisma.invoice.findMany({
      include: { payments: true }
    });

    let totalInvoiced = 0;
    let totalPaid = 0;

    invoices.forEach(inv => {
      totalInvoiced += inv.amount;
      inv.payments.forEach(p => {
        if (p.status === 'PAID') totalPaid += p.amount;
      });
    });

    return {
      totalInvoiced,
      totalPaid,
      outstanding: totalInvoiced - totalPaid,
      invoices
    };
  }

  async generateHotelReport() {
    const totalRooms = await this.prisma.room.count();
    const availableRooms = await this.prisma.room.count({ where: { status: 'AVAILABLE' } });
    const occupancyRate = totalRooms > 0 ? ((totalRooms - availableRooms) / totalRooms) * 100 : 0;

    return {
      occupancyRate: `${occupancyRate.toFixed(2)}%`,
      totalRooms,
      availableRooms
    };
  }
}
