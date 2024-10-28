import { Module } from '@nestjs/common';
import { CrmController } from './crm.controller';
import { CrmService } from './crm.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [CrmController],
  providers: [CrmService],
})
export class CrmModule {}