import { InventoryService } from './inventory.service';
import { Prisma } from '@prisma/client';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
    create(data: Prisma.InventoryUncheckedCreateInput): Promise<Inventory>;
    findAll(): Promise<Inventory[]>;
    updateQuantity(id: string, quantity: number): Promise<Inventory>;
}
