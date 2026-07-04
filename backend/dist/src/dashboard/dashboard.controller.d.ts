import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getFullStats(): Promise<{
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
