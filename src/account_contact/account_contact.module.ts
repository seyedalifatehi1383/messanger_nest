import { Module } from '@nestjs/common';
import { AccountContactService } from './account_contact.service';
import { AccountContactController } from './account_contact.controller';

@Module({
  controllers: [AccountContactController],
  providers: [AccountContactService],
})
export class AccountContactModule {}
