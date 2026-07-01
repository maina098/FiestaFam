import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    generateFinancialReport(startDate?: string, endDate?: string): Promise<{
        totalInvoiced: number;
        totalPaid: number;
        outstanding: number;
        invoices: any;
    }>;
    generateHotelReport(): Promise<{
        occupancyRate: string;
        totalRooms: any;
        availableRooms: any;
    }>;
}
