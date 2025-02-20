import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { ProductsModule } from 'src/products/products.module';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [ProductsModule],
})
export class OrdersModule {}
