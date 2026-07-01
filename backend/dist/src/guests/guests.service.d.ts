import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Guest } from '@prisma/client';
export declare class GuestsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.GuestCreateInput): Promise<Guest>;
    findAll(): Promise<Guest[]>;
    findOne(id: string): Promise<Guest | null>;
    update(id: string, data: Prisma.GuestUpdateInput): Promise<Guest>;
    remove(id: string): Promise<Guest>;
}
