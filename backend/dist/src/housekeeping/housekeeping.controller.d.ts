import { HousekeepingService } from './housekeeping.service';
import { Prisma, CleaningStatus } from '@prisma/client';
export declare class HousekeepingController {
    private readonly housekeepingService;
    constructor(housekeepingService: HousekeepingService);
    create(data: Prisma.CleaningTaskUncheckedCreateInput): Promise<CleaningTask>;
    findAll(): Promise<CleaningTask[]>;
    updateStatus(id: string, status: CleaningStatus): Promise<CleaningTask>;
}
