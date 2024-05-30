import { Module } from '@nestjs/common';
import { GroupAccountMessageService } from './group_account_message.service';
import { GroupAccountMessageController } from './group_account_message.controller';

@Module({
  controllers: [GroupAccountMessageController],
  providers: [GroupAccountMessageService],
})
export class GroupAccountMessageModule {}
