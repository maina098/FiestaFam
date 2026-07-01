import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Supplier } from '@prisma/client';
export declare class SuppliersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.SupplierCreateInput): Promise<Supplier>;
    findAll(): Promise<Supplier[]>;
    findOne(id: string): Promise<Supplier | null>;
}
