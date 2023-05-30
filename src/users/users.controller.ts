import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiTags, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiResponse({ status: 200, description: 'List of users', type: [User] })
  async getAllUsers(): Promise<User[]> {
    return this.userService.getAllUsers();
  }

  @Get(':id')
  @ApiResponse({ status: 200, description: 'User found', type: [User] })
  @ApiResponse({ status: 404, description: 'User not found' })
  async getUser(@Param('id', ParseIntPipe) id: number): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  @ApiResponse({ status: 201, description: 'User created', type: User })
  async createUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.createUserRepo(createUserDto);
  }
}
