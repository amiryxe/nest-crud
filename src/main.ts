import { Controller, Get, Module } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

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
})
class AppModule {}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
