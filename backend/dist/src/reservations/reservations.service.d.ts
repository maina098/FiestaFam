import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class ReservationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createReservationDto: CreateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        date: Date;
        time: string;
        guests: number;
        status: import("@prisma/client").$Enums.ReservationStatus;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    findAll(): import("@prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        date: Date;
        time: string;
        guests: number;
        status: import("@prisma/client").$Enums.ReservationStatus;
    }[]>;
    findOne(id: string): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        date: Date;
        time: string;
        guests: number;
        status: import("@prisma/client").$Enums.ReservationStatus;
    } | null, null, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    update(id: string, updateReservationDto: UpdateReservationDto): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        date: Date;
        time: string;
        guests: number;
        status: import("@prisma/client").$Enums.ReservationStatus;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
    remove(id: string): import("@prisma/client").Prisma.Prisma__ReservationClient<{
        id: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string;
        date: Date;
        time: string;
        guests: number;
        status: import("@prisma/client").$Enums.ReservationStatus;
    }, never, import("@prisma/client/runtime/client").DefaultArgs, import("@prisma/client").Prisma.PrismaClientOptions>;
}
