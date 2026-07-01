import { Controller, Get, Post, Body, Patch, Param, UseGuards } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('inventory')
@UseGuards(JwtAuthGuard, RolesGuard)
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING, Role.RESTAURANT_STAFF)
  create(@Body() data: Prisma.InventoryUncheckedCreateInput) {
    return this.inventoryService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING, Role.RESTAURANT_STAFF, Role.ACCOUNTANT)
  findAll() {
    return this.inventoryService.findAll();
  }

  @Patch(':id/quantity')
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.HOUSEKEEPING, Role.RESTAURANT_STAFF)
  updateQuantity(@Param('id') id: string, @Body('quantity') quantity: number) {
    return this.inventoryService.updateQuantity(id, quantity);
  }
}
