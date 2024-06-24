import { Module } from '@nestjs/common';
import { ChannelMessagesService } from './channel_messages.service';
import { ChannelMessagesController } from './channel_messages.controller';

@Module({
  controllers: [ChannelMessagesController],
  providers: [ChannelMessagesService],
})
export class ChannelMessagesModule {}
