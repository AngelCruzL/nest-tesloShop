import { Injectable } from '@nestjs/common';

import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async #insertNewProducts(): Promise<boolean> {
    await this.productsService.deleteAllProducts();

    return true;
  }

  async runSeed(): Promise<string> {
    await this.#insertNewProducts();

    return 'SEED EXECUTED';
  }
}
