import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  private readonly users: User[] = [];

  getAllUsers(): User[] {
    return this.users;
  }

  // createUser(createUserDto: CreateUserDto): User {
  //   const user: User = {
  //     id: Date.now().toString(),
  //     ...createUserDto,
  //   };
  //   this.users.push(user);
  //   return user;
  // }

  public getUser(id: number): Promise<User> {
    return this.repository.findOneById(id);
  }

  public createUserRepo(body: CreateUserDto): Promise<User> {
    const user: User = new User();
    user.email = body.email;
    user.name = body.name;
    return this.repository.save(user);
  }
}
