import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get('ping')
  @ApiOperation({ summary: 'Ping the Attendance microservice' })
  @ApiResponse({ status: 200, description: 'Microservice is reachable' })
  async ping() {
    return this.attendanceService.ping();
  }
}

