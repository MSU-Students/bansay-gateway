import { Controller, Get } from '@nestjs/common';
import { AttendanceService } from './attendance.service';
import { Public } from '../auth/decorators/is-public.decorator';

@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Public()
  @Get('ping')
  async ping() {
    return this.attendanceService.ping();
  }
}
