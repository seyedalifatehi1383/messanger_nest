import { PartialType } from '@nestjs/mapped-types';
import { CreateAccountChannelDto } from './create-account_channel.dto';

export class UpdateAccountChannelDto extends PartialType(CreateAccountChannelDto) {}
