import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class LiabilityService {
  constructor(@Inject('LIABILITY_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'liability.ping' }, {});
  }
}
