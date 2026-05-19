import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateLiabilityDto } from './dto/create-liability.dto';
import { UpdateLiabilityDto } from './dto/update-liability.dto';
import { QueryLiabilityDto } from './dto/query-liability.dto';

@Injectable()
export class LiabilityService {
  constructor(@Inject('LIABILITY_SERVICE') private readonly client: ClientProxy) {}

  ping() {
    return this.client.send({ cmd: 'liability.ping' }, {});
  }

  create(dto: CreateLiabilityDto) {
    return this.client.send({ cmd: 'liability.create' }, dto);
  }

  findAll(query: QueryLiabilityDto) {
    return this.client.send({ cmd: 'liability.findAll' }, query);
  }

  findOne(id: number) {
    return this.client.send({ cmd: 'liability.findOne' }, { id });
  }

  update(id: number, dto: UpdateLiabilityDto) {
    return this.client.send({ cmd: 'liability.update' }, { id, ...dto });
  }

  remove(id: number) {
    return this.client.send({ cmd: 'liability.remove' }, { id });
  }
}
