import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getApp() {
    return 'Home page of app';
  }
}
