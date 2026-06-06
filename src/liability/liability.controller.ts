import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { LiabilityService } from './liability.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Liability')
@Controller('liability')
export class LiabilityController {
  constructor(private readonly liabiityService: LiabilityService) {}

  @Get('ping')
  @ApiOperation({ summary: 'Ping the Liability microservice' })
  @ApiResponse({ status: 200, description: 'Microservice is reachable' })
  async ping() {
    return this.liabiityService.ping();
  }
}

