import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { Prisma, Role, CleaningStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('housekeeping')
@UseGuards(JwtAuthGuard, RolesGuard)
export class HousekeepingController {
  constructor(private readonly housekeepingService: HousekeepingService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING)
  create(@Body() data: Prisma.CleaningTaskUncheckedCreateInput) {
    return this.housekeepingService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING)
  findAll() {
    return this.housekeepingService.findAll();
  }

  @Patch(':id/status')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING)
  updateStatus(@Param('id') id: string, @Body('status') status: CleaningStatus) {
    return this.housekeepingService.updateStatus(id, status);
  }
}
