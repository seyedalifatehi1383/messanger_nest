import { Module } from '@nestjs/common';
import { MessageReplyService } from './message_reply.service';
import { MessageReplyController } from './message_reply.controller';

@Module({
  controllers: [MessageReplyController],
  providers: [MessageReplyService],
})
export class MessageReplyModule {}
