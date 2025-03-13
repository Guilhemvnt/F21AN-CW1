import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(username: string, email: string, password: string) {
    const existingUser = await this.usersService.findByUsername(username);
    const existingUserEmail = await this.usersService.findByEmail(email);
    if (existingUser) {
      throw new Error('Username already exists');
    }
    if (existingUserEmail) {
      throw new Error('Email already exists');
    }
    return this.usersService.createUser(username, email, password);
  }

  async login(username: string, password: string) {
    const user = await this.usersService.findByUsername(username);
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username: user.username, sub: user.id , role : user.role};
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async getUser(username: string) {
    try {
      const user = await this.usersService.findByUsername(username);

      if (!user) {
        throw new UnauthorizedException('User not found');
      }
      const { password, ...safeUser } = user;
      return safeUser;
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }

  async getRole(username: string) {
    try {
      return this.usersService.getUserRole(username);
    } catch (error) {
      throw new UnauthorizedException('Invalid or expired token');
    }
  }
}
