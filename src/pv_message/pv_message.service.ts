import { Injectable } from '@nestjs/common';
import { CreatePvMessageDto } from './dto/create-pv_message.dto';
import { UpdatePvMessageDto } from './dto/update-pv_message.dto';

@Injectable()
export class PvMessageService {
  create(createPvMessageDto: CreatePvMessageDto) {
    return 'This action adds a new pvMessage';
  }

  findAll() {
    return `This action returns all pvMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pvMessage`;
  }

  update(id: number, updatePvMessageDto: UpdatePvMessageDto) {
    return `This action updates a #${id} pvMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pvMessage`;
  }
}
