import { InvoicesService } from './invoices.service';
import { Prisma } from '@prisma/client';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(data: Prisma.InvoiceUncheckedCreateInput): Promise<Invoice>;
    findAll(): Promise<Invoice[]>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Prisma.InvoiceUpdateInput): Promise<Invoice>;
}
