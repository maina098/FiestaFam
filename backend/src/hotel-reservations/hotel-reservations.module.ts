import { Module } from '@nestjs/common';
import { HotelReservationsService } from './hotel-reservations.service';
import { HotelReservationsController } from './hotel-reservations.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HotelReservationsService],
  controllers: [HotelReservationsController],
  exports: [HotelReservationsService]
})
export class HotelReservationsModule {}
