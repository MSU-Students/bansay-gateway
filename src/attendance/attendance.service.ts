import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AttendanceService {
  constructor(@Inject('ATTENDANCE_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'attendance.ping' }, {});
  }
}
