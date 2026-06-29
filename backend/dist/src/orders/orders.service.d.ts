import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class OrdersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createOrderDto: CreateOrderDto): import("@prisma/client").Prisma.Prisma__OrderClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        userId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<({
        items: ({
            menuItem: {
                description: string | null;
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                imageUrl: string | null;
                isAvailable: boolean;
                categoryId: string;
            };
        } & {
            id: string;
            price: number;
            orderId: string;
            menuItemId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        userId: string | null;
    })[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__OrderClient<({
        items: ({
            menuItem: {
                description: string | null;
                id: string;
                name: string;
                createdAt: Date;
                updatedAt: Date;
                price: number;
                imageUrl: string | null;
                isAvailable: boolean;
                categoryId: string;
            };
        } & {
            id: string;
            price: number;
            orderId: string;
            menuItemId: string;
            quantity: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        userId: string | null;
    }) | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateOrderDto: UpdateOrderDto): import("@prisma/client").Prisma.Prisma__OrderClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        userId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__OrderClient<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@prisma/client").$Enums.OrderStatus;
        totalAmount: number;
        userId: string | null;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
