import { PartialType } from '@nestjs/mapped-types';
import { CreateChannelAccountMessageDto } from './create-channel_account_message.dto';

export class UpdateChannelAccountMessageDto extends PartialType(CreateChannelAccountMessageDto) {}
