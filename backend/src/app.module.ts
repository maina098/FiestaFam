import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MenuModule } from './menu/menu.module';
import { ReservationsModule } from './reservations/reservations.module';
import { OrdersModule } from './orders/orders.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HotelsModule } from './hotels/hotels.module';
import { RoomsModule } from './rooms/rooms.module';
import { CheckinsModule } from './checkins/checkins.module';
import { CheckoutsModule } from './checkouts/checkouts.module';
import { HousekeepingModule } from './housekeeping/housekeeping.module';
import { MaintenanceModule } from './maintenance/maintenance.module';
import { InventoryModule } from './inventory/inventory.module';
import { ReportsModule } from './reports/reports.module';
import { SettingsModule } from './settings/settings.module';

@Module({
  imports: [PrismaModule, MenuModule, ReservationsModule, OrdersModule, DashboardModule, AuthModule, UsersModule, HotelsModule, RoomsModule, CheckinsModule, CheckoutsModule, HousekeepingModule, MaintenanceModule, InventoryModule, ReportsModule, SettingsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
