import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Payment } from '@prisma/client';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.PaymentUncheckedCreateInput): Promise<Payment>;
    findAll(): Promise<Payment[]>;
}
