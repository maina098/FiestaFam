import { AuditLogsService } from './audit-logs.service';
import { Prisma } from '@prisma/client';
export declare class AuditLogsController {
    private readonly auditLogsService;
    constructor(auditLogsService: AuditLogsService);
    create(data: Prisma.AuditLogUncheckedCreateInput): Promise<AuditLog>;
    findAll(): Promise<AuditLog[]>;
}
