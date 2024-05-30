import { Injectable } from '@nestjs/common';
import { CreateMessageReplyDto } from './dto/create-message_reply.dto';
import { UpdateMessageReplyDto } from './dto/update-message_reply.dto';

@Injectable()
export class MessageReplyService {
  create(createMessageReplyDto: CreateMessageReplyDto) {
    return 'This action adds a new messageReply';
  }

  findAll() {
    return `This action returns all messageReply`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageReply`;
  }

  update(id: number, updateMessageReplyDto: UpdateMessageReplyDto) {
    return `This action updates a #${id} messageReply`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageReply`;
  }
}
