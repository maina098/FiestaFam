import { DashboardService } from './dashboard.service';
export declare class DashboardController {
    private readonly dashboardService;
    constructor(dashboardService: DashboardService);
    getFullStats(): Promise<{
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
