import { Module } from '@nestjs/common';
import { AccountGroupService } from './account_group.service';
import { AccountGroupController } from './account_group.controller';

@Module({
  controllers: [AccountGroupController],
  providers: [AccountGroupService],
})
export class AccountGroupModule {}
