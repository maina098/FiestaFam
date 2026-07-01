import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Order } from '@prisma/client';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.OrderUncheckedCreateInput): Promise<Order>;
    chargeToRoom(orderData: Prisma.OrderUncheckedCreateInput, invoiceId: string): Promise<Order>;
    findAll(): Promise<Order[]>;
    findOne(id: string): Promise<Order | null>;
    update(id: string, data: Prisma.OrderUpdateInput): Promise<Order>;
}
