import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, HotelReservation, BookingStatus } from '@prisma/client';

@Injectable()
export class HotelReservationsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.HotelReservationUncheckedCreateInput): Promise<HotelReservation> {
    // Check if room is already booked for these dates
    const conflicting = await this.prisma.hotelReservation.findFirst({
      where: {
        roomId: data.roomId,
        status: { in: [BookingStatus.CONFIRMED, BookingStatus.CHECKED_IN, BookingStatus.PENDING] },
        OR: [
          { checkInDate: { lte: data.checkOutDate }, checkOutDate: { gte: data.checkInDate } }
        ]
      }
    });

    if (conflicting) {
      throw new BadRequestException('Room is already booked for the selected dates');
    }

    return this.prisma.hotelReservation.create({
      data,
      include: { guest: true, room: true }
    });
  }

  async findAll(): Promise<HotelReservation[]> {
    return this.prisma.hotelReservation.findMany({
      include: { guest: true, room: { include: { category: true } } },
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string): Promise<HotelReservation | null> {
    return this.prisma.hotelReservation.findUnique({
      where: { id },
      include: { guest: true, room: true, invoices: true }
    });
  }

  async update(id: string, data: Prisma.HotelReservationUpdateInput): Promise<HotelReservation> {
    return this.prisma.hotelReservation.update({
      where: { id },
      data,
      include: { guest: true, room: true }
    });
  }

  async checkIn(id: string): Promise<HotelReservation> {
    const reservation = await this.prisma.hotelReservation.update({
      where: { id },
      data: { status: BookingStatus.CHECKED_IN }
    });
    
    // Update room status
    await this.prisma.room.update({
      where: { id: reservation.roomId },
      data: { status: 'OCCUPIED' }
    });

    return reservation;
  }

  async checkOut(id: string): Promise<HotelReservation> {
    const reservation = await this.prisma.hotelReservation.update({
      where: { id },
      data: { status: BookingStatus.CHECKED_OUT }
    });
    
    // Update room status
    await this.prisma.room.update({
      where: { id: reservation.roomId },
      data: { status: 'CLEANING' }
    });

    return reservation;
  }
}
