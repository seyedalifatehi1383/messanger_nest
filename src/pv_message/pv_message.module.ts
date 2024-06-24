import { Module } from '@nestjs/common';
import { PvMessageService } from './pv_message.service';
import { PvMessageController } from './pv_message.controller';

@Module({
  controllers: [PvMessageController],
  providers: [PvMessageService],
})
export class PvMessageModule {}
