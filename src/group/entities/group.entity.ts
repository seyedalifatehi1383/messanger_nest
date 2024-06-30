import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class Group {
    @ApiProperty({ description: 'account PK', example: 1 })
    @IsNumber()
    ID: number;
  
    @ApiProperty({ description: 'account name', example: 'accountName' })
    @IsString()
    name: string;
  
    @ApiProperty({
      description: 'account profile image',
      example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
    })
    @IsUUID()
    profile: string;
  
    @ApiProperty({ description: 'account userId', example: 1 })
    @IsString()
    GroupID: string;
  
    @ApiProperty({ description: 'is the user is Online', example: false })
    @IsNumber()
    messagesNumber: number;
  
}
