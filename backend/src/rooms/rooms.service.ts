import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Room, RoomCategory } from '@prisma/client';

@Injectable()
export class RoomsService {
  constructor(private prisma: PrismaService) {}

  // ---- Room Categories ----
  async createCategory(data: Prisma.RoomCategoryCreateInput): Promise<RoomCategory> {
    return this.prisma.roomCategory.create({ data });
  }

  async findAllCategories(): Promise<RoomCategory[]> {
    return this.prisma.roomCategory.findMany();
  }

  // ---- Rooms ----
  async createRoom(data: Prisma.RoomCreateInput): Promise<Room> {
    return this.prisma.room.create({ data });
  }

  async findAllRooms(): Promise<Room[]> {
    return this.prisma.room.findMany({
      include: { category: true }
    });
  }

  async findOneRoom(id: string): Promise<Room | null> {
    return this.prisma.room.findUnique({
      where: { id },
      include: { category: true }
    });
  }

  async updateRoom(id: string, data: Prisma.RoomUpdateInput): Promise<Room> {
    return this.prisma.room.update({
      where: { id },
      data,
    });
  }

  async removeRoom(id: string): Promise<Room> {
    return this.prisma.room.delete({ where: { id } });
  }
}
