import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('rooms')
@UseGuards(JwtAuthGuard, RolesGuard)
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  // ---- Categories ----
  @Post('categories')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  createCategory(@Body() data: Prisma.RoomCategoryCreateInput) {
    return this.roomsService.createCategory(data);
  }

  @Get('categories')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  findAllCategories() {
    return this.roomsService.findAllCategories();
  }

  // ---- Rooms ----
  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  createRoom(@Body() data: Prisma.RoomCreateInput) {
    return this.roomsService.createRoom(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST, Role.HOUSEKEEPING)
  findAllRooms() {
    return this.roomsService.findAllRooms();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST, Role.HOUSEKEEPING)
  findOneRoom(@Param('id') id: string) {
    return this.roomsService.findOneRoom(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST, Role.HOUSEKEEPING)
  updateRoom(@Param('id') id: string, @Body() data: Prisma.RoomUpdateInput) {
    return this.roomsService.updateRoom(id, data);
  }

  @Delete(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  removeRoom(@Param('id') id: string) {
    return this.roomsService.removeRoom(id);
  }
}
