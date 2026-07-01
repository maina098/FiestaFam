import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Room, RoomCategory } from '@prisma/client';
export declare class RoomsService {
    private prisma;
    constructor(prisma: PrismaService);
    createCategory(data: Prisma.RoomCategoryCreateInput): Promise<RoomCategory>;
    findAllCategories(): Promise<RoomCategory[]>;
    createRoom(data: Prisma.RoomCreateInput): Promise<Room>;
    findAllRooms(): Promise<Room[]>;
    findOneRoom(id: string): Promise<Room | null>;
    updateRoom(id: string, data: Prisma.RoomUpdateInput): Promise<Room>;
    removeRoom(id: string): Promise<Room>;
}
