import { Controller, Get, Post, Body, Patch, Param, UseGuards, Req } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { Prisma, Role } from '@prisma/client';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@Controller('notifications')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  @Roles(Role.SUPER_ADMIN, Role.HOTEL_MANAGER)
  create(@Body() data: Prisma.NotificationUncheckedCreateInput) {
    return this.notificationsService.create(data);
  }

  @Get()
  findAll(@Req() req) {
    // Ideally, users only see their own notifications, or admins see all.
    const user = req.user;
    if (user.role === Role.SUPER_ADMIN || user.role === Role.HOTEL_MANAGER) {
      return this.notificationsService.findAll();
    }
    return this.notificationsService.findAll(user.userId);
  }

  @Patch(':id/read')
  markAsRead(@Param('id') id: string) {
    return this.notificationsService.markAsRead(id);
  }
}
