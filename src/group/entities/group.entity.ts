import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString, IsUUID } from "class-validator";

export class Group {
    @ApiProperty({ description: 'group PK', example: 1 })
    @IsNumber()
    ID: number;
  
    @ApiProperty({ description: 'group name', example: 'groupName' })
    @IsString()
    name: string;
  
    @ApiProperty({
      description: 'group profile image',
      example: '996de063-3f1b-4201-b9a1-2da6b32f09c5',
    })
    @IsUUID()
    profile: string;
  
    @ApiProperty({ description: 'group id', example: '@group' })
    @IsString()
    GroupID: string;
  
    @ApiProperty({ description: 'the number of each messege of the group', example: 1 })
    @IsNumber()
    messagesNumber: number;
  
}
