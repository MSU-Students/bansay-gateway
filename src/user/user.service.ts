import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'user.ping' }, {});
  }

  testError() {
    return this.client.send({ cmd: 'user.error' }, {});
  }
}
