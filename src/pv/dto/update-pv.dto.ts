import { PartialType } from '@nestjs/mapped-types';
import { CreatePvDto } from './create-pv.dto';

export class UpdatePvDto extends PartialType(CreatePvDto) {}
