import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupMessageDto } from './create-group_message.dto';

export class UpdateGroupMessageDto extends PartialType(CreateGroupMessageDto) {}
