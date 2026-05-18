import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(@Inject('USER_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'user.ping' }, {});
  }

  create(dto: CreateUserDto) {
    return this.client.send({ cmd: 'user.create' }, dto);
  }

  findAll() {
    return this.client.send({ cmd: 'user.findAll' }, {});
  }

  findById(id: number) {
    return this.client.send({ cmd: 'user.findById' }, { id });
  }

  update(id: number, dto: UpdateUserDto) {
    return this.client.send({ cmd: 'user.update' }, { id, dto });
  }
}
