import { RoomsService } from './rooms.service';
import { Prisma } from '@prisma/client';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    createCategory(data: Prisma.RoomCategoryCreateInput): Promise<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        basePrice: number;
        capacity: number;
    }>;
    findAllCategories(): Promise<{
        description: string | null;
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        basePrice: number;
        capacity: number;
    }[]>;
    createRoom(data: Prisma.RoomCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RoomStatus;
        createdAt: Date;
        updatedAt: Date;
        price: number | null;
        categoryId: string;
        roomNumber: string;
        floor: string | null;
    }>;
    findAllRooms(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RoomStatus;
        createdAt: Date;
        updatedAt: Date;
        price: number | null;
        categoryId: string;
        roomNumber: string;
        floor: string | null;
    }[]>;
    findOneRoom(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RoomStatus;
        createdAt: Date;
        updatedAt: Date;
        price: number | null;
        categoryId: string;
        roomNumber: string;
        floor: string | null;
    } | null>;
    updateRoom(id: string, data: Prisma.RoomUpdateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RoomStatus;
        createdAt: Date;
        updatedAt: Date;
        price: number | null;
        categoryId: string;
        roomNumber: string;
        floor: string | null;
    }>;
    removeRoom(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.RoomStatus;
        createdAt: Date;
        updatedAt: Date;
        price: number | null;
        categoryId: string;
        roomNumber: string;
        floor: string | null;
    }>;
}
