import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { SuppliersService } from './suppliers.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('suppliers')
@UseGuards(JwtAuthGuard, RolesGuard)
export class SuppliersController {
  constructor(private readonly suppliersService: SuppliersService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  create(@Body() data: Prisma.SupplierCreateInput) {
    return this.suppliersService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  findAll() {
    return this.suppliersService.findAll();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  findOne(@Param('id') id: string) {
    return this.suppliersService.findOne(id);
  }
}
