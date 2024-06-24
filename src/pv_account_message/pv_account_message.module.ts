import { Module } from '@nestjs/common';
import { PvAccountMessageService } from './pv_account_message.service';
import { PvAccountMessageController } from './pv_account_message.controller';

@Module({
  controllers: [PvAccountMessageController],
  providers: [PvAccountMessageService],
})
export class PvAccountMessageModule {}
