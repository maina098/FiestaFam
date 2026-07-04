import { HousekeepingService } from './housekeeping.service';
import { Prisma, CleaningStatus } from '@prisma/client';
export declare class HousekeepingController {
    private readonly housekeepingService;
    constructor(housekeepingService: HousekeepingService);
    create(data: Prisma.CleaningTaskUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.CleaningStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        roomId: string;
        staffId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.CleaningStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        roomId: string;
        staffId: string | null;
    }[]>;
    updateStatus(id: string, status: CleaningStatus): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.CleaningStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        roomId: string;
        staffId: string | null;
    }>;
}
