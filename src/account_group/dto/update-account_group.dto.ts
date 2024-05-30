import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountGroupDto } from './create-account_group.dto';

export class UpdateAccountGroupDto extends PartialType(CreateAccountGroupDto) {}
