import { Injectable } from '@nestjs/common';
import { CreateGroupMessageDto } from './dto/create-group_message.dto';
import { UpdateGroupMessageDto } from './dto/update-group_message.dto';

@Injectable()
export class GroupMessageService {
  create(createGroupMessageDto: CreateGroupMessageDto) {
    return 'This action adds a new groupMessage';
  }

  findAll() {
    return `This action returns all groupMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupMessage`;
  }

  update(id: number, updateGroupMessageDto: UpdateGroupMessageDto) {
    return `This action updates a #${id} groupMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupMessage`;
  }
}
