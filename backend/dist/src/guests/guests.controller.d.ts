import { GuestsService } from './guests.service';
import { Prisma } from '@prisma/client';
export declare class GuestsController {
    private readonly guestsService;
    constructor(guestsService: GuestsService);
    create(data: Prisma.GuestCreateInput): Promise<Guest>;
    findAll(): Promise<Guest[]>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Prisma.GuestUpdateInput): Promise<Guest>;
    remove(id: string): Promise<Guest>;
}
