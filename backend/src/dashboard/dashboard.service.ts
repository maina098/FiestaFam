import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { BookingStatus, PaymentStatus } from '@prisma/client';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  async getOccupancyStats() {
    const totalRooms = await this.prisma.room.count();
    const availableRooms = await this.prisma.room.count({ where: { status: 'AVAILABLE' } });
    const occupiedRooms = await this.prisma.room.count({ where: { status: 'OCCUPIED' } });
    const reservedRooms = await this.prisma.room.count({ where: { status: 'RESERVED' } });
    const maintenanceRooms = await this.prisma.room.count({ where: { status: 'MAINTENANCE' } });

    return {
      totalRooms,
      availableRooms,
      occupiedRooms,
      reservedRooms,
      maintenanceRooms
    };
  }

  async getRevenueAnalytics() {
    // In a real app, you'd filter by date ranges. For now, aggregate all PAID payments.
    const payments = await this.prisma.payment.aggregate({
      where: { status: 'PAID' },
      _sum: { amount: true }
    });

    return {
      totalRevenue: payments._sum.amount || 0,
      // Add logic for daily, weekly, monthly if needed using Prisma date filters
    };
  }

  async getBookingAnalytics() {
    const totalReservations = await this.prisma.hotelReservation.count();
    const completedBookings = await this.prisma.hotelReservation.count({ where: { status: BookingStatus.CHECKED_OUT } });
    const cancelledBookings = await this.prisma.hotelReservation.count({ where: { status: BookingStatus.CANCELLED } });
    const pendingBookings = await this.prisma.hotelReservation.count({ where: { status: BookingStatus.PENDING } });

    return {
      totalReservations,
      completedBookings,
      cancelledBookings,
      pendingBookings
    };
  }

  async getFullDashboardStats() {
    const [occupancy, revenue, bookings] = await Promise.all([
      this.getOccupancyStats(),
      this.getRevenueAnalytics(),
      this.getBookingAnalytics()
    ]);

    return { occupancy, revenue, bookings };
  }
}
