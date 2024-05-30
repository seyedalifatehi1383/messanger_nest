import { Injectable } from '@nestjs/common';
import { CreatePvAccountMessageDto } from './dto/create-pv_account_message.dto';
import { UpdatePvAccountMessageDto } from './dto/update-pv_account_message.dto';

@Injectable()
export class PvAccountMessageService {
  create(createPvAccountMessageDto: CreatePvAccountMessageDto) {
    return 'This action adds a new pvAccountMessage';
  }

  findAll() {
    return `This action returns all pvAccountMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pvAccountMessage`;
  }

  update(id: number, updatePvAccountMessageDto: UpdatePvAccountMessageDto) {
    return `This action updates a #${id} pvAccountMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} pvAccountMessage`;
  }
}
