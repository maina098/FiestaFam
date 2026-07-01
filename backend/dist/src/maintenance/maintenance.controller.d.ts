import { MaintenanceService } from './maintenance.service';
import { Prisma, MaintenanceStatus } from '@prisma/client';
export declare class MaintenanceController {
    private readonly maintenanceService;
    constructor(maintenanceService: MaintenanceService);
    create(data: Prisma.MaintenanceUncheckedCreateInput): Promise<Maintenance>;
    findAll(): Promise<Maintenance[]>;
    updateStatus(id: string, status: MaintenanceStatus): Promise<Maintenance>;
}
