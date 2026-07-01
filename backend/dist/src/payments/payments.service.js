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
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
        const invoice = await this.prisma.invoice.findUnique({ where: { id: data.invoiceId }, include: { payments: true } });
        if (!invoice)
            throw new common_1.BadRequestException('Invoice not found');
        const totalPaid = invoice.payments.reduce((sum, p) => sum + p.amount, 0) + data.amount;
        const isFullyPaid = totalPaid >= invoice.amount;
        return this.prisma.$transaction(async (prisma) => {
            const payment = await prisma.payment.create({ data });
            await prisma.invoice.update({
                where: { id: data.invoiceId },
                data: { status: isFullyPaid ? client_1.PaymentStatus.PAID : client_1.PaymentStatus.PARTIAL }
            });
            return payment;
        });
    }
    async findAll() {
        return this.prisma.payment.findMany({
            include: { invoice: { include: { guest: true } } },
            orderBy: { createdAt: 'desc' }
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map