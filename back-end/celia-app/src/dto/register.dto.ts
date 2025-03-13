import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, MinLength, MaxLength } from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'testuser', description: 'Unique username for the user' })
  @IsString()
  @MaxLength(15)
  username: string;

  @ApiProperty({ example: 'testuser@example.com', description: 'Valid email address' })
  @IsEmail()
  @MaxLength(40)
  email: string;

  @ApiProperty({ example: 'password123', description: 'Password for the user', minLength: 8 })
  @IsString()
  @MinLength(8)
  password: string;
}
