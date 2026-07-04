import { PaymentsService } from './payments.service';
import { Prisma } from '@prisma/client';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(data: Prisma.PaymentUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        invoiceId: string;
        amount: number;
        method: import("@prisma/client").$Enums.PaymentMethod;
        transactionId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.PaymentStatus;
        createdAt: Date;
        invoiceId: string;
        amount: number;
        method: import("@prisma/client").$Enums.PaymentMethod;
        transactionId: string | null;
    }[]>;
}
