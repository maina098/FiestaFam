import { PrismaService } from '../prisma/prisma.service';
import { Prisma, CleaningTask, CleaningStatus } from '@prisma/client';
export declare class HousekeepingService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.CleaningTaskUncheckedCreateInput): Promise<CleaningTask>;
    findAll(): Promise<CleaningTask[]>;
    updateStatus(id: string, status: CleaningStatus): Promise<CleaningTask>;
}
