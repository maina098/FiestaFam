import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('payments')
@UseGuards(JwtAuthGuard, RolesGuard)
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT, Role.RECEPTIONIST)
  create(@Body() data: Prisma.PaymentUncheckedCreateInput) {
    return this.paymentsService.create(data);
  }

  @Get()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER, Role.ACCOUNTANT)
  findAll() {
    return this.paymentsService.findAll();
  }
}
