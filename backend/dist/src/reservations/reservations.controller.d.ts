import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
export declare class ReservationsController {
    private readonly reservationsService;
    constructor(reservationsService: ReservationsService);
    create(createReservationDto: CreateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        time: string;
        guests: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        time: string;
        guests: number;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        time: string;
        guests: number;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateReservationDto: UpdateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        time: string;
        guests: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        phone: string;
        status: import("@prisma/client").$Enums.ReservationStatus;
        createdAt: Date;
        updatedAt: Date;
        date: Date;
        time: string;
        guests: number;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
