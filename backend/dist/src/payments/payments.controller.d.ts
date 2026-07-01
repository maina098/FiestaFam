import { PaymentsService } from './payments.service';
import { Prisma } from '@prisma/client';
export declare class PaymentsController {
    private readonly paymentsService;
    constructor(paymentsService: PaymentsService);
    create(data: Prisma.PaymentUncheckedCreateInput): Promise<Payment>;
    findAll(): Promise<Payment[]>;
}
