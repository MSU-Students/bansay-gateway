import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Public } from '../auth/decorators/is-public.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Public()
  @Get('ping')
  async ping() {
    return this.userService.ping();
  }
}
