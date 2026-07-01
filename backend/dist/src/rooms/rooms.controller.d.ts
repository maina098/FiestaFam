import { RoomsService } from './rooms.service';
import { Prisma } from '@prisma/client';
export declare class RoomsController {
    private readonly roomsService;
    constructor(roomsService: RoomsService);
    createCategory(data: Prisma.RoomCategoryCreateInput): Promise<RoomCategory>;
    findAllCategories(): Promise<RoomCategory[]>;
    createRoom(data: Prisma.RoomCreateInput): Promise<Room>;
    findAllRooms(): Promise<Room[]>;
    findOneRoom(id: string): Promise<any>;
    updateRoom(id: string, data: Prisma.RoomUpdateInput): Promise<Room>;
    removeRoom(id: string): Promise<Room>;
}
