import { GuestsService } from './guests.service';
import { Prisma } from '@prisma/client';
export declare class GuestsController {
    private readonly guestsService;
    constructor(guestsService: GuestsService);
    create(data: Prisma.GuestCreateInput): Promise<{
        id: string;
        email: string | null;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string | null;
        passportNumber: string | null;
        address: string | null;
        country: string | null;
    }>;
    findAll(): Promise<{
        id: string;
        email: string | null;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string | null;
        passportNumber: string | null;
        address: string | null;
        country: string | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string | null;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string | null;
        passportNumber: string | null;
        address: string | null;
        country: string | null;
    } | null>;
    update(id: string, data: Prisma.GuestUpdateInput): Promise<{
        id: string;
        email: string | null;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string | null;
        passportNumber: string | null;
        address: string | null;
        country: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string | null;
        phone: string;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        nationalId: string | null;
        passportNumber: string | null;
        address: string | null;
        country: string | null;
    }>;
}
