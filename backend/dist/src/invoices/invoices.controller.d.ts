import { InvoicesService } from './invoices.service';
import { Prisma } from '@prisma/client';
export declare class InvoicesController {
    private readonly invoicesService;
    constructor(invoicesService: InvoicesService);
    create(data: Prisma.InvoiceUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        reservationId: string | null;
        amount: number;
        tax: number;
        discount: number;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        reservationId: string | null;
        amount: number;
        tax: number;
        discount: number;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        reservationId: string | null;
        amount: number;
        tax: number;
        discount: number;
    } | null>;
    update(id: string, data: Prisma.InvoiceUpdateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        reservationId: string | null;
        amount: number;
        tax: number;
        discount: number;
    }>;
}
