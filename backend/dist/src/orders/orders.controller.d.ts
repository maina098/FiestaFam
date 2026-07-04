import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(data: Prisma.OrderUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        totalAmount: number;
        userId: string | null;
        invoiceId: string | null;
    }>;
    chargeToRoom(invoiceId: string, data: Prisma.OrderUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        totalAmount: number;
        userId: string | null;
        invoiceId: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        totalAmount: number;
        userId: string | null;
        invoiceId: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        totalAmount: number;
        userId: string | null;
        invoiceId: string | null;
    } | null>;
    update(id: string, data: Prisma.OrderUpdateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.OrderStatus;
        createdAt: Date;
        updatedAt: Date;
        totalAmount: number;
        userId: string | null;
        invoiceId: string | null;
    }>;
}
