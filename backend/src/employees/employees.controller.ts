import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('employees')
@UseGuards(JwtAuthGuard, RolesGuard)
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  create(@Body() data: Prisma.EmployeeCreateInput) {
    return this.employeesService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  findAll() {
    return this.employeesService.findAll();
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  update(@Param('id') id: string, @Body() data: Prisma.EmployeeUpdateInput) {
    return this.employeesService.update(id, data);
  }
}
