import { Controller, Get } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { Public } from '../auth/decorators/is-public.decorator';

@Controller('liability')
export class LiabilityController {
  constructor(private readonly liabiityService: LiabilityService) {}

  @Public()
  @Get('ping')
  async ping() {
    return this.liabiityService.ping();
  }
}
