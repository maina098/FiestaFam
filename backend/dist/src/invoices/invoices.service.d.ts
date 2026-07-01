import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Invoice } from '@prisma/client';
export declare class InvoicesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.InvoiceUncheckedCreateInput): Promise<Invoice>;
    findAll(): Promise<Invoice[]>;
    findOne(id: string): Promise<Invoice | null>;
    update(id: string, data: Prisma.InvoiceUpdateInput): Promise<Invoice>;
}
