import { Module } from '@nestjs/common';
import { ChannelAccountMessageService } from './channel_account_message.service';
import { ChannelAccountMessageController } from './channel_account_message.controller';

@Module({
  controllers: [ChannelAccountMessageController],
  providers: [ChannelAccountMessageService],
})
export class ChannelAccountMessageModule {}
