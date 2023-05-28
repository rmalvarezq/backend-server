import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './product.service';
import { Product } from './entities/product.entity';

@ApiTags('Products')
@Controller('Products')
export class ProductsController {
  constructor(private readonly userService: ProductsService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'List of users', type: [Product] })
  async getAllUsers(): Promise<Product[]> {
    return this.userService.getAllUsers();
  }

  @Post()
  @ApiResponse({ status: 201, description: 'User created', type: Product })
  async createUser(@Body() createUserDto: CreateProductDto): Promise<Product> {
    return this.userService.createUser(createUserDto);
  }
}
