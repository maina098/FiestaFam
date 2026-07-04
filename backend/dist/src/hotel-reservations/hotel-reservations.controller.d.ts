import { HotelReservationsService } from './hotel-reservations.service';
import { Prisma } from '@prisma/client';
export declare class HotelReservationsController {
    private readonly hotelReservationsService;
    constructor(hotelReservationsService: HotelReservationsService);
    create(data: Prisma.HotelReservationUncheckedCreateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    }>;
    findAll(): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    } | null>;
    update(id: string, data: Prisma.HotelReservationUpdateInput): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    }>;
    checkIn(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    }>;
    checkOut(id: string): Promise<{
        id: string;
        status: import("@prisma/client").$Enums.BookingStatus;
        createdAt: Date;
        updatedAt: Date;
        guestId: string;
        roomId: string;
        checkInDate: Date;
        checkOutDate: Date;
        paymentStatus: import("@prisma/client").$Enums.PaymentStatus;
    }>;
}
