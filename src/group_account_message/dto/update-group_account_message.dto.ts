import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupAccountMessageDto } from './create-group_account_message.dto';

export class UpdateGroupAccountMessageDto extends PartialType(CreateGroupAccountMessageDto) {}
