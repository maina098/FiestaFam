"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const menu_module_1 = require("./menu/menu.module");
const reservations_module_1 = require("./reservations/reservations.module");
const orders_module_1 = require("./orders/orders.module");
const dashboard_module_1 = require("./dashboard/dashboard.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const hotels_module_1 = require("./hotels/hotels.module");
const rooms_module_1 = require("./rooms/rooms.module");
const checkins_module_1 = require("./checkins/checkins.module");
const checkouts_module_1 = require("./checkouts/checkouts.module");
const housekeeping_module_1 = require("./housekeeping/housekeeping.module");
const maintenance_module_1 = require("./maintenance/maintenance.module");
const inventory_module_1 = require("./inventory/inventory.module");
const reports_module_1 = require("./reports/reports.module");
const settings_module_1 = require("./settings/settings.module");
const guests_module_1 = require("./guests/guests.module");
const hotel_reservations_module_1 = require("./hotel-reservations/hotel-reservations.module");
const invoices_module_1 = require("./invoices/invoices.module");
const payments_module_1 = require("./payments/payments.module");
const employees_module_1 = require("./employees/employees.module");
const suppliers_module_1 = require("./suppliers/suppliers.module");
const notifications_module_1 = require("./notifications/notifications.module");
const audit_logs_module_1 = require("./audit-logs/audit-logs.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, menu_module_1.MenuModule, reservations_module_1.ReservationsModule, orders_module_1.OrdersModule, dashboard_module_1.DashboardModule, auth_module_1.AuthModule, users_module_1.UsersModule, hotels_module_1.HotelsModule, rooms_module_1.RoomsModule, checkins_module_1.CheckinsModule, checkouts_module_1.CheckoutsModule, housekeeping_module_1.HousekeepingModule, maintenance_module_1.MaintenanceModule, inventory_module_1.InventoryModule, reports_module_1.ReportsModule, settings_module_1.SettingsModule, guests_module_1.GuestsModule, hotel_reservations_module_1.HotelReservationsModule, invoices_module_1.InvoicesModule, payments_module_1.PaymentsModule, employees_module_1.EmployeesModule, suppliers_module_1.SuppliersModule, notifications_module_1.NotificationsModule, audit_logs_module_1.AuditLogsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map