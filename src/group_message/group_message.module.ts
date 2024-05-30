import { Module } from '@nestjs/common';
import { GroupMessageService } from './group_message.service';
import { GroupMessageController } from './group_message.controller';

@Module({
  controllers: [GroupMessageController],
  providers: [GroupMessageService],
})
export class GroupMessageModule {}
