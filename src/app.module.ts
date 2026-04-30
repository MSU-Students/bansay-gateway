import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LiabilityModule } from './liability/liability.module';
import { AttendanceModule } from './attendance/attendance.module';

@Module({
  imports: [UserModule, LiabilityModule, AttendanceModule],
})
export class AppModule {}
