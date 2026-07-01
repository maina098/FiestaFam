import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Guest } from '@prisma/client';

@Injectable()
export class GuestsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.GuestCreateInput): Promise<Guest> {
    return this.prisma.guest.create({ data });
  }

  async findAll(): Promise<Guest[]> {
    return this.prisma.guest.findMany({
      orderBy: { createdAt: 'desc' }
    });
  }

  async findOne(id: string): Promise<Guest | null> {
    return this.prisma.guest.findUnique({ where: { id } });
  }

  async update(id: string, data: Prisma.GuestUpdateInput): Promise<Guest> {
    return this.prisma.guest.update({
      where: { id },
      data,
    });
  }

  async remove(id: string): Promise<Guest> {
    return this.prisma.guest.delete({ where: { id } });
  }
}
