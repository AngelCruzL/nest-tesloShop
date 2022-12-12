import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { ProductsService } from 'src/products/products.service';
import { User } from './../auth/entities/user.entity';
import { initialData } from './data/seed-data';

@Injectable()
export class SeedService {
  constructor(
    private readonly productsService: ProductsService,

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async #deleteTables(): Promise<void> {
    await this.productsService.deleteAllProducts();

    const queryBuilder = this.userRepository.createQueryBuilder();
    await queryBuilder.delete().where({}).execute();
  }

  async #insertNewUsers(): Promise<User> {
    const seedUsers = initialData.users;
    const users: User[] = [];

    seedUsers.forEach((user) => {
      users.push(this.userRepository.create(user));
    });

    await this.userRepository.save(users);

    return users[0];
  }

  async #insertNewProducts(adminUser: User): Promise<boolean> {
    await this.productsService.deleteAllProducts();

    const products = initialData.products;
    const insertPromises = [];

    products.forEach((product) => {
      insertPromises.push(this.productsService.create(product, adminUser));
    });

    await Promise.all(insertPromises);

    return true;
  }

  async runSeed(): Promise<string> {
    await this.#deleteTables();
    const adminUser = await this.#insertNewUsers();
    await this.#insertNewProducts(adminUser);

    return 'SEED EXECUTED';
  }
}
