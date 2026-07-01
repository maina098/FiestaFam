import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('invoices')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InvoicesController {
  constructor(private readonly invoicesService: InvoicesService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT, Role.RECEPTIONIST)
  create(@Body() data: Prisma.InvoiceUncheckedCreateInput) {
    return this.invoicesService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT, Role.RECEPTIONIST)
  findAll() {
    return this.invoicesService.findAll();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT, Role.RECEPTIONIST)
  findOne(@Param('id') id: string) {
    return this.invoicesService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  update(@Param('id') id: string, @Body() data: Prisma.InvoiceUpdateInput) {
    return this.invoicesService.update(id, data);
  }
}
