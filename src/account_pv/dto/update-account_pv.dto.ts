import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountPvDto } from './create-account_pv.dto';

export class UpdateAccountPvDto extends PartialType(CreateAccountPvDto) {}
