import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('orders')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.RESTAURANT_STAFF, Role.HOTEL_MANAGER)
  create(@Body() data: Prisma.OrderUncheckedCreateInput) {
    return this.ordersService.create(data);
  }

  @Post('charge-room/:invoiceId')
  @Roles(Role.SUPER_ADMIN, Role.RESTAURANT_STAFF, Role.HOTEL_MANAGER)
  chargeToRoom(@Param('invoiceId') invoiceId: string, @Body() data: Prisma.OrderUncheckedCreateInput) {
    return this.ordersService.chargeToRoom(data, invoiceId);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.RESTAURANT_STAFF, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  findAll() {
    return this.ordersService.findAll();
  }

  @Get(':id')
  @Roles(Role.SUPER_ADMIN, Role.RESTAURANT_STAFF, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  findOne(@Param('id') id: string) {
    return this.ordersService.findOne(id);
  }

  @Patch(':id')
  @Roles(Role.SUPER_ADMIN, Role.RESTAURANT_STAFF, Role.HOTEL_MANAGER)
  update(@Param('id') id: string, @Body() data: Prisma.OrderUpdateInput) {
    return this.ordersService.update(id, data);
  }
}
