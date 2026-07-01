import { PrismaService } from '../prisma/prisma.service';
import { Prisma, AuditLog } from '@prisma/client';
export declare class AuditLogsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.AuditLogUncheckedCreateInput): Promise<AuditLog>;
    findAll(): Promise<AuditLog[]>;
}
