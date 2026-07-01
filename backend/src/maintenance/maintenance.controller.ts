import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { MaintenanceService } from './maintenance.service';
import { Prisma, Role, MaintenanceStatus } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('maintenance')
@UseGuards(JwtAuthGuard, RolesGuard)
export class MaintenanceController {
  constructor(private readonly maintenanceService: MaintenanceService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING, Role.RECEPTIONIST)
  create(@Body() data: Prisma.MaintenanceUncheckedCreateInput) {
    return this.maintenanceService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING)
  findAll() {
    return this.maintenanceService.findAll();
  }

  @Patch(':id/status')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING)
  updateStatus(@Param('id') id: string, @Body('status') status: MaintenanceStatus) {
    return this.maintenanceService.updateStatus(id, status);
  }
}
