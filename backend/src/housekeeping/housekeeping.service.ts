import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, CleaningTask, CleaningStatus } from '@prisma/client';

@Injectable()
export class HousekeepingService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.CleaningTaskUncheckedCreateInput): Promise<CleaningTask> {
    return this.prisma.cleaningTask.create({ data });
  }

  async findAll(): Promise<CleaningTask[]> {
    return this.prisma.cleaningTask.findMany({
      include: { room: true, staff: true },
      orderBy: { date: 'desc' }
    });
  }

  async updateStatus(id: string, status: CleaningStatus): Promise<CleaningTask> {
    const task = await this.prisma.cleaningTask.update({
      where: { id },
      data: { status }
    });

    if (status === CleaningStatus.COMPLETED) {
      await this.prisma.room.update({
        where: { id: task.roomId },
        data: { status: 'AVAILABLE' }
      });
    }

    return task;
  }
}
