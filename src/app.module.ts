import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LiabilityModule } from './liability/liability.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule, LiabilityModule, AttendanceModule, AuthModule],
})
export class AppModule {}
