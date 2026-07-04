import { AuditLogsService } from './audit-logs.service';
import { Prisma } from '@prisma/client';
export declare class AuditLogsController {
    private readonly auditLogsService;
    constructor(auditLogsService: AuditLogsService);
    create(data: Prisma.AuditLogUncheckedCreateInput): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        action: string;
        details: string | null;
        ipAddress: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        userId: string | null;
        action: string;
        details: string | null;
        ipAddress: string | null;
    }[]>;
}
