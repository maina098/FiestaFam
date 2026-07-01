import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Maintenance, MaintenanceStatus } from '@prisma/client';
export declare class MaintenanceService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.MaintenanceUncheckedCreateInput): Promise<Maintenance>;
    findAll(): Promise<Maintenance[]>;
    updateStatus(id: string, status: MaintenanceStatus): Promise<Maintenance>;
}
