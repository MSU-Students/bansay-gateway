import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('User')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('ping')
  @ApiOperation({ summary: 'Ping the User microservice' })
  @ApiResponse({ status: 200, description: 'Microservice is reachable' })
  async ping() {
    return this.userService.ping();
  }
}

