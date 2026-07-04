import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getOccupancyStats(): Promise<{
        totalRooms: number;
        availableRooms: number;
        occupiedRooms: number;
        reservedRooms: number;
        maintenanceRooms: number;
    }>;
    getRevenueAnalytics(): Promise<{
        totalRevenue: number;
    }>;
    getBookingAnalytics(): Promise<{
        totalReservations: number;
        completedBookings: number;
        cancelledBookings: number;
        pendingBookings: number;
    }>;
    getFullDashboardStats(): Promise<{
        occupancy: {
            totalRooms: number;
            availableRooms: number;
            occupiedRooms: number;
            reservedRooms: number;
            maintenanceRooms: number;
        };
        revenue: {
            totalRevenue: number;
        };
        bookings: {
            totalReservations: number;
            completedBookings: number;
            cancelledBookings: number;
            pendingBookings: number;
        };
    }>;
}
