import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { PostsModule } from './posts/posts.module';

@Module({
  controllers: [AppController],
  imports: [UserModule, PostsModule],
})
export class AppModule {}
