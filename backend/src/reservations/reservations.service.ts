import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ReservationsService {
  constructor(private prisma: PrismaService) {}

  create(createReservationDto: CreateReservationDto) {
    return this.prisma.reservation.create({
      data: createReservationDto as any,
    });
  }

  findAll() {
    return this.prisma.reservation.findMany();
  }

  findOne(id: string) {
    return this.prisma.reservation.findUnique({
      where: { id },
    });
  }

  update(id: string, updateReservationDto: UpdateReservationDto) {
    return this.prisma.reservation.update({
      where: { id },
      data: updateReservationDto as any,
    });
  }

  remove(id: string) {
    return this.prisma.reservation.delete({
      where: { id },
    });
  }
}
