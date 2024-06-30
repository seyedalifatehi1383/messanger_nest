import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
} from 'class-validator';
export class UserEntity {
  @ApiProperty({ description: 'user PK', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'username', example: 'username' })
  @IsNotEmpty()
  @IsString()
  username: string;

  @ApiProperty({ description: 'email', example: 'example@email.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'the password of user',
    example: 'exp_pass',
  })
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;
}