import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getOccupancyStats(): Promise<{
        totalRooms: any;
        availableRooms: any;
        occupiedRooms: any;
        reservedRooms: any;
        maintenanceRooms: any;
    }>;
    getRevenueAnalytics(): Promise<{
        totalRevenue: any;
    }>;
    getBookingAnalytics(): Promise<{
        totalReservations: any;
        completedBookings: any;
        cancelledBookings: any;
        pendingBookings: any;
    }>;
    getFullDashboardStats(): Promise<{
        occupancy: {
            totalRooms: any;
            availableRooms: any;
            occupiedRooms: any;
            reservedRooms: any;
            maintenanceRooms: any;
        };
        revenue: {
            totalRevenue: any;
        };
        bookings: {
            totalReservations: any;
            completedBookings: any;
            cancelledBookings: any;
            pendingBookings: any;
        };
    }>;
}
