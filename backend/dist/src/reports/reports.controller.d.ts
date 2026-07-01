import { ReportsService } from './reports.service';
export declare class ReportsController {
    private readonly reportsService;
    constructor(reportsService: ReportsService);
    getFinancialReport(startDate?: string, endDate?: string): Promise<{
        totalInvoiced: number;
        totalPaid: number;
        outstanding: number;
        invoices: any;
    }>;
    getHotelReport(): Promise<{
        occupancyRate: string;
        totalRooms: any;
        availableRooms: any;
    }>;
}
