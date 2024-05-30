import { PartialType } from '@nestjs/mapped-types';
import { CreatePvAccountMessageDto } from './create-pv_account_message.dto';

export class UpdatePvAccountMessageDto extends PartialType(CreatePvAccountMessageDto) {}
