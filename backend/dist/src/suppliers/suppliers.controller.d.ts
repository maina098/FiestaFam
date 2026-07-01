import { SuppliersService } from './suppliers.service';
import { Prisma } from '@prisma/client';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(data: Prisma.SupplierCreateInput): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: string): Promise<any>;
}
