import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, AuditLog } from '@prisma/client';

@Injectable()
export class AuditLogsService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.AuditLogUncheckedCreateInput): Promise<AuditLog> {
    return this.prisma.auditLog.create({ data });
  }

  async findAll(): Promise<AuditLog[]> {
    return this.prisma.auditLog.findMany({
      include: { user: true },
      orderBy: { createdAt: 'desc' }
    });
  }
}
