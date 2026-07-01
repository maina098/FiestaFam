"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationsModule = void 0;
const common_1 = require("@nestjs/common");
const hotel_reservations_service_1 = require("./hotel-reservations.service");
const hotel_reservations_controller_1 = require("./hotel-reservations.controller");
const prisma_module_1 = require("../prisma/prisma.module");
let HotelReservationsModule = class HotelReservationsModule {
};
exports.HotelReservationsModule = HotelReservationsModule;
exports.HotelReservationsModule = HotelReservationsModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule],
        providers: [hotel_reservations_service_1.HotelReservationsService],
        controllers: [hotel_reservations_controller_1.HotelReservationsController],
        exports: [hotel_reservations_service_1.HotelReservationsService]
    })
], HotelReservationsModule);
//# sourceMappingURL=hotel-reservations.module.js.map