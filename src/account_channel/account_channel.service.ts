import { Injectable } from '@nestjs/common';
import { CreateAccountChannelDto } from './dto/create-account_channel.dto';
import { UpdateAccountChannelDto } from './dto/update-account_channel.dto';

@Injectable()
export class AccountChannelService {
  create(createAccountChannelDto: CreateAccountChannelDto) {
    return 'This action adds a new accountChannel';
  }

  findAll() {
    return `This action returns all accountChannel`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountChannel`;
  }

  update(id: number, updateAccountChannelDto: UpdateAccountChannelDto) {
    return `This action updates a #${id} accountChannel`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountChannel`;
  }
}
