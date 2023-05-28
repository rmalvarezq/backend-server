import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  createUser(createUserDto: CreateUserDto): User {
    const user: User = {
      id: Date.now().toString(),
      ...createUserDto,
    };
    this.users.push(user);
    return user;
  }
}
