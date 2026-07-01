import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Inventory } from '@prisma/client';
export declare class InventoryService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.InventoryUncheckedCreateInput): Promise<Inventory>;
    findAll(): Promise<Inventory[]>;
    updateQuantity(id: string, quantity: number): Promise<Inventory>;
}
