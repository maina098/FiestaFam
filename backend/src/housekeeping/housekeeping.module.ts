import { Module } from '@nestjs/common';
import { HousekeepingService } from './housekeeping.service';
import { HousekeepingController } from './housekeeping.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [HousekeepingService],
  controllers: [HousekeepingController],
  exports: [HousekeepingService]
})
export class HousekeepingModule {}
