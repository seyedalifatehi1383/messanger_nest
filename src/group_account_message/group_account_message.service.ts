import { Injectable } from '@nestjs/common';
import { CreateGroupAccountMessageDto } from './dto/create-group_account_message.dto';
import { UpdateGroupAccountMessageDto } from './dto/update-group_account_message.dto';

@Injectable()
export class GroupAccountMessageService {
  create(createGroupAccountMessageDto: CreateGroupAccountMessageDto) {
    return 'This action adds a new groupAccountMessage';
  }

  findAll() {
    return `This action returns all groupAccountMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupAccountMessage`;
  }

  update(id: number, updateGroupAccountMessageDto: UpdateGroupAccountMessageDto) {
    return `This action updates a #${id} groupAccountMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupAccountMessage`;
  }
}
