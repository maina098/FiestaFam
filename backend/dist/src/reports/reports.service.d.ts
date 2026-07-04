import { PrismaService } from '../prisma/prisma.service';
export declare class ReportsService {
    private prisma;
    constructor(prisma: PrismaService);
    generateFinancialReport(startDate?: string, endDate?: string): Promise<{
        totalInvoiced: number;
        totalPaid: number;
        outstanding: number;
        invoices: ({
            payments: {
                id: string;
                status: import("@prisma/client").$Enums.PaymentStatus;
                createdAt: Date;
                invoiceId: string;
                amount: number;
                method: import("@prisma/client").$Enums.PaymentMethod;
                transactionId: string | null;
            }[];
        } & {
            id: string;
            status: import("@prisma/client").$Enums.PaymentStatus;
            createdAt: Date;
            updatedAt: Date;
            guestId: string;
            reservationId: string | null;
            amount: number;
            tax: number;
            discount: number;
        })[];
    }>;
    generateHotelReport(): Promise<{
        occupancyRate: string;
        totalRooms: number;
        availableRooms: number;
    }>;
}
