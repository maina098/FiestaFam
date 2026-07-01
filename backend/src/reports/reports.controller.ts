import { Controller, Get, UseGuards, Query } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('reports')
@UseGuards(JwtAuthGuard, RolesGuard)
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get('financial')
  @Roles(Role.SUPER_ADMIN, Role.ACCOUNTANT, Role.HOTEL_MANAGER)
  getFinancialReport(@Query('startDate') startDate?: string, @Query('endDate') endDate?: string) {
    return this.reportsService.generateFinancialReport(startDate, endDate);
  }

  @Get('hotel')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  getHotelReport() {
    return this.reportsService.generateHotelReport();
  }
}
