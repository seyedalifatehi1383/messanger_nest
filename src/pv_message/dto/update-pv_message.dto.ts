import { PartialType } from '@nestjs/mapped-types';
import { CreatePvMessageDto } from './create-pv_message.dto';

export class UpdatePvMessageDto extends PartialType(CreatePvMessageDto) {}
