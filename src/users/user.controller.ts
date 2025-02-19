import { Body, Controller, Get, Param } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Get()
  getUsers() {
    return 'Get all users';
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return 'Get a single user with id: ' + id;
  }
}
