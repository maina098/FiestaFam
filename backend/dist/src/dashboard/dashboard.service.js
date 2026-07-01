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
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let DashboardService = class DashboardService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getOccupancyStats() {
        const totalRooms = await this.prisma.room.count();
        const availableRooms = await this.prisma.room.count({ where: { status: 'AVAILABLE' } });
        const occupiedRooms = await this.prisma.room.count({ where: { status: 'OCCUPIED' } });
        const reservedRooms = await this.prisma.room.count({ where: { status: 'RESERVED' } });
        const maintenanceRooms = await this.prisma.room.count({ where: { status: 'MAINTENANCE' } });
        return {
            totalRooms,
            availableRooms,
            occupiedRooms,
            reservedRooms,
            maintenanceRooms
        };
    }
    async getRevenueAnalytics() {
        const payments = await this.prisma.payment.aggregate({
            where: { status: 'PAID' },
            _sum: { amount: true }
        });
        return {
            totalRevenue: payments._sum.amount || 0,
        };
    }
    async getBookingAnalytics() {
        const totalReservations = await this.prisma.hotelReservation.count();
        const completedBookings = await this.prisma.hotelReservation.count({ where: { status: client_1.BookingStatus.CHECKED_OUT } });
        const cancelledBookings = await this.prisma.hotelReservation.count({ where: { status: client_1.BookingStatus.CANCELLED } });
        const pendingBookings = await this.prisma.hotelReservation.count({ where: { status: client_1.BookingStatus.PENDING } });
        return {
            totalReservations,
            completedBookings,
            cancelledBookings,
            pendingBookings
        };
    }
    async getFullDashboardStats() {
        const [occupancy, revenue, bookings] = await Promise.all([
            this.getOccupancyStats(),
            this.getRevenueAnalytics(),
            this.getBookingAnalytics()
        ]);
        return { occupancy, revenue, bookings };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map