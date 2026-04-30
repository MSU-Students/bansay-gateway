import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { LiabilityModule } from './liability/liability.module';

@Module({
  imports: [UserModule, LiabilityModule],
})
export class AppModule {}
