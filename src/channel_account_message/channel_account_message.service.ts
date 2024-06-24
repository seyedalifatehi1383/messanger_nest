import { Injectable } from '@nestjs/common';
import { CreateChannelAccountMessageDto } from './dto/create-channel_account_message.dto';
import { UpdateChannelAccountMessageDto } from './dto/update-channel_account_message.dto';

@Injectable()
export class ChannelAccountMessageService {
  create(createChannelAccountMessageDto: CreateChannelAccountMessageDto) {
    return 'This action adds a new channelAccountMessage';
  }

  findAll() {
    return `This action returns all channelAccountMessage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} channelAccountMessage`;
  }

  update(id: number, updateChannelAccountMessageDto: UpdateChannelAccountMessageDto) {
    return `This action updates a #${id} channelAccountMessage`;
  }

  remove(id: number) {
    return `This action removes a #${id} channelAccountMessage`;
  }
}
