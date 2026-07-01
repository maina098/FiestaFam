import { Module } from '@nestjs/common';
import { GuestsService } from './guests.service';
import { GuestsController } from './guests.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [GuestsService],
  controllers: [GuestsController],
  exports: [GuestsService]
})
export class GuestsModule {}
