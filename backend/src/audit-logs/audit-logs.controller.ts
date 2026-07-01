import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { AuditLogsService } from './audit-logs.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('audit-logs')
@UseGuards(JwtAuthGuard, RolesGuard)
export class AuditLogsController {
  constructor(private readonly auditLogsService: AuditLogsService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  create(@Body() data: Prisma.AuditLogUncheckedCreateInput) {
    return this.auditLogsService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  findAll() {
    return this.auditLogsService.findAll();
  }
}
