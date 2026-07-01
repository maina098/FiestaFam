import { PrismaService } from '../prisma/prisma.service';
import { Prisma, HotelReservation } from '@prisma/client';
export declare class HotelReservationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: Prisma.HotelReservationUncheckedCreateInput): Promise<HotelReservation>;
    findAll(): Promise<HotelReservation[]>;
    findOne(id: string): Promise<HotelReservation | null>;
    update(id: string, data: Prisma.HotelReservationUpdateInput): Promise<HotelReservation>;
    checkIn(id: string): Promise<HotelReservation>;
    checkOut(id: string): Promise<HotelReservation>;
}
