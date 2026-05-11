import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { ThrottlerStorageRedisService } from '@nest-lab/throttler-storage-redis';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { UserModule } from './user/user.module';
import { LiabilityModule } from './liability/liability.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import Redis from 'ioredis';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl: 60000,
            limit: 10,
          },
        ],
        storage: new ThrottlerStorageRedisService(
          new Redis({
            host: config.get('REDIS_HOST', 'localhost'),
            port: config.get('REDIS_PORT', 6379),
          }),
        ),
      }),
    }),
    UserModule,
    LiabilityModule,
    AttendanceModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
