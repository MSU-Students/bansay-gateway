import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LiabilityService } from './liability.service';

@Controller('liability')
export class LiabilityController {
  constructor(private readonly liabiityService: LiabilityService) {}

  @Get('ping')
  async ping() {
    return this.liabiityService.ping();
  }
}
