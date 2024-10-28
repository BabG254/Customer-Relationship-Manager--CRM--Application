import { Controller } from '@nestjs/common';
import { CrmService } from './crm.service';

@Controller('crm')
export class CrmController {
  constructor(private readonly crmService: CrmService) {}

  @Get()
  async getAll() {
    // Implement get all CRM data logic
  }

  @Post()
  async create() {
    // Implement create new CRM data logic
  }

  @Put(':id')
  async update(@Param('id') id: string) {
    // Implement update CRM data logic
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    // Implement delete CRM data logic
  }
}
