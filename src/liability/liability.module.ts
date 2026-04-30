import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { LiabilityController } from './liability.controller';
import { LiabilityService } from './liability.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'LIABILITY_SERVICE',
        transport: Transport.TCP,
        options: {
          host: process.env.LIABILITY_SERVICE_HOST || 'localhost',
          port: 3002,
        },
      },
    ]),
  ],
  controllers: [LiabilityController],
  providers: [LiabilityService],
})
export class LiabilityModule {}
