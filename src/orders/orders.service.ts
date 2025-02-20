import { Injectable } from '@nestjs/common';

import { ProductsService } from 'src/products/products.service';

@Injectable()
export class OrdersService {
  constructor(private readonly product: ProductsService) {}

  getOrdersAndProducts() {
    return this.product.getProducts();
  }
}
