import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  private readonly users: Product[] = [];

  getAllUsers(): Product[] {
    return this.users;
  }

  createUser(createUserDto: CreateProductDto): Product {
    const user: Product = {
      id: Date.now().toString(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }
}
