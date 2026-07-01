import { OrdersService } from './orders.service';
import { Prisma } from '@prisma/client';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    create(data: Prisma.OrderUncheckedCreateInput): Promise<{
        id: string;
        totalAmount: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    chargeToRoom(invoiceId: string, data: Prisma.OrderUncheckedCreateInput): Promise<{
        id: string;
        totalAmount: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        totalAmount: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        totalAmount: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    update(id: string, data: Prisma.OrderUpdateInput): Promise<{
        id: string;
        totalAmount: number;
        status: import("@prisma/client").$Enums.OrderStatus;
        userId: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
