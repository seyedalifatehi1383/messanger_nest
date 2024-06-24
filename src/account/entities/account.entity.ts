import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
export class AccountEntity {
  @ApiProperty({ description: 'account PK', example: 1 })
  @IsNumber()
  ID: number;

  @ApiProperty({ description: 'account name', example: 'accountName' })
  @IsString()
  name: string;

  @ApiProperty({ description: 'account ID', example: '@amir' })
  @IsString()
  accountID: string;

  @ApiProperty({
    description: 'account profile image',
    example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
  })
  @IsUUID()
  profile: string;

  @ApiProperty({ description: 'account userId', example: 1 })
  @IsNumber()
  userID: number;

  @ApiProperty({ description: 'is the user is Online', example: false })
  @IsBoolean()
  isOnline: boolean;

  @ApiProperty({
    description: 'account last seen',
    example: new Date(),
  })
  @IsOptional()
  @IsDateString()
  lastTimeOnline: Date;
}