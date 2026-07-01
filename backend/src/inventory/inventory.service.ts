import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Inventory } from '@prisma/client';

@Injectable()
export class InventoryService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.InventoryUncheckedCreateInput): Promise<Inventory> {
    return this.prisma.inventory.create({ data });
  }

  async findAll(): Promise<Inventory[]> {
    return this.prisma.inventory.findMany({ include: { supplier: true } });
  }

  async updateQuantity(id: string, quantity: number): Promise<Inventory> {
    return this.prisma.inventory.update({
      where: { id },
      data: { quantity }
    });
  }
}
