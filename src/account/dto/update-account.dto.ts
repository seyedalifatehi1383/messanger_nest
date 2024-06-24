import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountDto } from './create-account.dto';
import { AccountEntity } from '../entities/account.entity';

export class UpdateAccountDto extends PartialType(AccountEntity) {}
