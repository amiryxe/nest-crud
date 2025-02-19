import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { UserModule } from './users/user.module';

@Controller()
class AppController {
  @Get()
  getApp() {
    return 'Hello world';
  }
}

@Controller('about')
class AboutController {
  @Get()
  getAbout() {
    return 'About page';
  }
}

@Module({
  controllers: [AppController, AboutController],
  imports: [UserModule],
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
