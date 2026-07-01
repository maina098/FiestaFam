import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { HotelReservationsService } from './hotel-reservations.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('hotel-reservations')
@UseGuards(JwtAuthGuard, RolesGuard)
export class HotelReservationsController {
  constructor(private readonly hotelReservationsService: HotelReservationsService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  create(@Body() data: Prisma.HotelReservationUncheckedCreateInput) {
    return this.hotelReservationsService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST, Role.HOUSEKEEPING)
  findAll() {
    return this.hotelReservationsService.findAll();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  findOne(@Param('id') id: string) {
    return this.hotelReservationsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  update(@Param('id') id: string, @Body() data: Prisma.HotelReservationUpdateInput) {
    return this.hotelReservationsService.update(id, data);
  }

  @Post(':id/check-in')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  checkIn(@Param('id') id: string) {
    return this.hotelReservationsService.checkIn(id);
  }

  @Post(':id/check-out')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  checkOut(@Param('id') id: string) {
    return this.hotelReservationsService.checkOut(id);
  }
}
