import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './users/user.module';
import { PostsModule } from './posts/posts.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';

@Module({
  controllers: [AppController],
  imports: [UserModule, PostsModule, ProductsModule, OrdersModule],
})
export class AppModule {}
