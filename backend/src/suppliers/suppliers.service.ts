import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Supplier } from '@prisma/client';

@Injectable()
export class SuppliersService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.SupplierCreateInput): Promise<Supplier> {
    return this.prisma.supplier.create({ data });
  }

  async findAll(): Promise<Supplier[]> {
    return this.prisma.supplier.findMany();
  }

  async findOne(id: string): Promise<Supplier | null> {
    return this.prisma.supplier.findUnique({ where: { id }, include: { inventory: true } });
  }
}
