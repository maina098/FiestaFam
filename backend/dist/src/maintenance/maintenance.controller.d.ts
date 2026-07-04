import { MaintenanceService } from './maintenance.service';
import { Prisma, MaintenanceStatus } from '@prisma/client';
export declare class MaintenanceController {
    private readonly maintenanceService;
    constructor(maintenanceService: MaintenanceService);
    create(data: Prisma.MaintenanceUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        issue: string;
        priority: import("@prisma/client").$Enums.PriorityLevel;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        issue: string;
        priority: import("@prisma/client").$Enums.PriorityLevel;
    }[]>;
    updateStatus(id: string, status: MaintenanceStatus): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.MaintenanceStatus;
        createdAt: Date;
        updatedAt: Date;
        roomId: string;
        issue: string;
        priority: import("@prisma/client").$Enums.PriorityLevel;
    }>;
}
