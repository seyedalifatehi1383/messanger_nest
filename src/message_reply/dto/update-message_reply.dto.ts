import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageReplyDto } from './create-message_reply.dto';

export class UpdateMessageReplyDto extends PartialType(CreateMessageReplyDto) {}
