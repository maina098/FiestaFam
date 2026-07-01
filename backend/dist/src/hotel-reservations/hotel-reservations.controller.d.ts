import { HotelReservationsService } from './hotel-reservations.service';
import { Prisma } from '@prisma/client';
export declare class HotelReservationsController {
    private readonly hotelReservationsService;
    constructor(hotelReservationsService: HotelReservationsService);
    create(data: Prisma.HotelReservationUncheckedCreateInput): Promise<HotelReservation>;
    findAll(): Promise<HotelReservation[]>;
    findOne(id: string): Promise<any>;
    update(id: string, data: Prisma.HotelReservationUpdateInput): Promise<HotelReservation>;
    checkIn(id: string): Promise<HotelReservation>;
    checkOut(id: string): Promise<HotelReservation>;
}
