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
exports.ReportsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateFinancialReport(startDate, endDate) {
        const invoices = await this.prisma.invoice.findMany({
            include: { payments: true }
        });
        let totalInvoiced = 0;
        let totalPaid = 0;
        invoices.forEach(inv => {
            totalInvoiced += inv.amount;
            inv.payments.forEach(p => {
                if (p.status === 'PAID')
                    totalPaid += p.amount;
            });
        });
        return {
            totalInvoiced,
            totalPaid,
            outstanding: totalInvoiced - totalPaid,
            invoices
        };
    }
    async generateHotelReport() {
        const totalRooms = await this.prisma.room.count();
        const availableRooms = await this.prisma.room.count({ where: { status: 'AVAILABLE' } });
        const occupancyRate = totalRooms > 0 ? ((totalRooms - availableRooms) / totalRooms) * 100 : 0;
        return {
            occupancyRate: `${occupancyRate.toFixed(2)}%`,
            totalRooms,
            availableRooms
        };
    }
};
exports.ReportsService = ReportsService;
exports.ReportsService = ReportsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ReportsService);
//# sourceMappingURL=reports.service.js.map