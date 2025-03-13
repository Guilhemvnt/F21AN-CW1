import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async findByUsername(username: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async findByEmail(email: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { email } });
  }
  
  async findById(id: number): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { id } });
  }
  
  async createUser(username: string, email: string, password: string): Promise<Users> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = this.usersRepository.create({ username, email, password: hashedPassword });
    return this.usersRepository.save(newUser);
  }

  async getUserRole(username: string): Promise<string> {
    const user = await this.usersRepository.findOne({
      where: { username },
      select: ['role'],
    });
      if (!user) {
      throw new Error('User not found');
    }

    return user.role;
  }

}
