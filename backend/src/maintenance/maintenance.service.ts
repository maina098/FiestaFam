import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Maintenance, MaintenanceStatus } from '@prisma/client';

@Injectable()
export class MaintenanceService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.MaintenanceUncheckedCreateInput): Promise<Maintenance> {
    const task = await this.prisma.maintenance.create({ data });
    
    await this.prisma.room.update({
      where: { id: task.roomId },
      data: { status: 'MAINTENANCE' }
    });

    return task;
  }

  async findAll(): Promise<Maintenance[]> {
    return this.prisma.maintenance.findMany({
      include: { room: true },
      orderBy: { createdAt: 'desc' }
    });
  }

  async updateStatus(id: string, status: MaintenanceStatus): Promise<Maintenance> {
    const task = await this.prisma.maintenance.update({
      where: { id },
      data: { status }
    });

    if (status === MaintenanceStatus.RESOLVED) {
      await this.prisma.room.update({
        where: { id: task.roomId },
        data: { status: 'AVAILABLE' }
      });
    }

    return task;
  }
}
