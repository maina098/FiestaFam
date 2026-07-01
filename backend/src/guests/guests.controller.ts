import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('guests')
@UseGuards(JwtAuthGuard, RolesGuard)
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  create(@Body() data: Prisma.GuestCreateInput) {
    return this.guestsService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  findAll() {
    return this.guestsService.findAll();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  findOne(@Param('id') id: string) {
    return this.guestsService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.RECEPTIONIST)
  update(@Param('id') id: string, @Body() data: Prisma.GuestUpdateInput) {
    return this.guestsService.update(id, data);
  }

  @Delete(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  remove(@Param('id') id: string) {
    return this.guestsService.remove(id);
  }
}
