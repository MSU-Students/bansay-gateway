import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'user.ping' }, {});
  }

  create(dto: CreateUserDto) {
    return this.client.send({ cmd: 'user.create' }, dto);
  }
}
