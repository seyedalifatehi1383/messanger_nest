import { Module } from '@nestjs/common';
import { AccountPvService } from './account_pv.service';
import { AccountPvController } from './account_pv.controller';

@Module({
  controllers: [AccountPvController],
  providers: [AccountPvService],
})
export class AccountPvModule {}
