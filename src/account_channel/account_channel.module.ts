import { Module } from '@nestjs/common';
import { AccountChannelService } from './account_channel.service';
import { AccountChannelController } from './account_channel.controller';

@Module({
  controllers: [AccountChannelController],
  providers: [AccountChannelService],
})
export class AccountChannelModule {}
