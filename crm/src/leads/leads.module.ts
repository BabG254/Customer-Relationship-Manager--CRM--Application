import { Module } from '@nestjs/common';
import { LeadsController } from './leads.controller';
import { LeadsService } from './leads.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [LeadsController],
  providers: [LeadsService],
})
export class LeadsModule {}