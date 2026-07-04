import { InventoryService } from './inventory.service';
import { Prisma } from '@prisma/client';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    create(data: Prisma.InventoryUncheckedCreateInput): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        itemName: string;
        quantity: number;
        unit: string;
        supplierId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        itemName: string;
        quantity: number;
        unit: string;
        supplierId: string | null;
    }[]>;
    updateQuantity(id: string, quantity: number): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        category: string;
        itemName: string;
        quantity: number;
        unit: string;
        supplierId: string | null;
    }>;
}
