import { Controller, UseGuards, Post, Body, Get, Request } from '@nestjs/common';
import { ApiTags, ApiBody, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RegisterDto } from '../dto/register.dto';
import { LoginDto } from '../dto/login.dto';

import { Role } from '../role/role.enum';
import { RolesGuard } from '../role/role.guard';
import { Roles } from '../role/role.decorator';

@ApiTags('auth') // Group endpoints under "auth"
@Controller('auth')

export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiBody({ type: RegisterDto })
  @ApiResponse({ status: 201, description: 'User successfully registered' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  async register(@Body() body: RegisterDto) {
    return this.authService.register(body.username, body.email, body.password);
  }
  
  @Post('login')
  @ApiBody({ type: LoginDto })
  @ApiResponse({ status: 200, description: 'User successfully logged in', schema: {
    example: { access_token: 'your.jwt.token' },
  }})
  @ApiResponse({ status: 401, description: 'Invalid credentials' })
  async login(@Body() body: LoginDto) {
    return this.authService.login(body.username, body.password);
  }

  @UseGuards(AuthGuard)
  @ApiBearerAuth('access-token')
  @ApiResponse({
    status: 200,
    description: 'User profile retrieved successfully',
    schema: {
      example: {
        username: 'testuser',
        email: 'testuser@example.com',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized - Missing or invalid token',
  })
  @Get('profile')
  async getUser(@Request() req) {
    return this.authService.getUser(req.user.username);
  }

  @Get('user')
  @Roles(Role.USER)
  @UseGuards(AuthGuard, RolesGuard)
  @ApiBearerAuth('access-token')

  getRole(@Request() req) {
    return this.authService.getRole(req.user.username);
  }
}
