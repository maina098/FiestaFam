"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let HotelReservationsService = class HotelReservationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const conflicting = await this.prisma.hotelReservation.findFirst({
            where: {
                roomId: data.roomId,
                status: { in: [client_1.BookingStatus.CONFIRMED, client_1.BookingStatus.CHECKED_IN, client_1.BookingStatus.PENDING] },
                OR: [
                    { checkInDate: { lte: data.checkOutDate }, checkOutDate: { gte: data.checkInDate } }
                ]
            }
        });
        if (conflicting) {
            throw new common_1.BadRequestException('Room is already booked for the selected dates');
        }
        return this.prisma.hotelReservation.create({
            data,
            include: { guest: true, room: true }
        });
    }
    async findAll() {
        return this.prisma.hotelReservation.findMany({
            include: { guest: true, room: { include: { category: true } } },
            orderBy: { createdAt: 'desc' }
        });
    }
    async findOne(id) {
        return this.prisma.hotelReservation.findUnique({
            where: { id },
            include: { guest: true, room: true, invoices: true }
        });
    }
    async update(id, data) {
        return this.prisma.hotelReservation.update({
            where: { id },
            data,
            include: { guest: true, room: true }
        });
    }
    async checkIn(id) {
        const reservation = await this.prisma.hotelReservation.update({
            where: { id },
            data: { status: client_1.BookingStatus.CHECKED_IN }
        });
        await this.prisma.room.update({
            where: { id: reservation.roomId },
            data: { status: 'OCCUPIED' }
        });
        return reservation;
    }
    async checkOut(id) {
        const reservation = await this.prisma.hotelReservation.update({
            where: { id },
            data: { status: client_1.BookingStatus.CHECKED_OUT }
        });
        await this.prisma.room.update({
            where: { id: reservation.roomId },
            data: { status: 'CLEANING' }
        });
        return reservation;
    }
};
exports.HotelReservationsService = HotelReservationsService;
exports.HotelReservationsService = HotelReservationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], HotelReservationsService);
//# sourceMappingURL=hotel-reservations.service.js.map