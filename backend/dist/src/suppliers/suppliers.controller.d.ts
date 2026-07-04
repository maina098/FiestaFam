import { SuppliersService } from './suppliers.service';
import { Prisma } from '@prisma/client';
export declare class SuppliersController {
    private readonly suppliersService;
    constructor(suppliersService: SuppliersService);
    create(data: Prisma.SupplierCreateInput): Promise<{
        id: string;
        email: string | null;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        company: string;
    }>;
    findAll(): Promise<{
        id: string;
        email: string | null;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        company: string;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string | null;
        name: string;
        phone: string | null;
        createdAt: Date;
        updatedAt: Date;
        company: string;
    } | null>;
}
