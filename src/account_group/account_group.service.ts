import { Injectable } from '@nestjs/common';
import { CreateAccountGroupDto } from './dto/create-account_group.dto';
import { UpdateAccountGroupDto } from './dto/update-account_group.dto';

@Injectable()
export class AccountGroupService {
  create(createAccountGroupDto: CreateAccountGroupDto) {
    return 'This action adds a new accountGroup';
  }

  findAll() {
    return `This action returns all accountGroup`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountGroup`;
  }

  update(id: number, updateAccountGroupDto: UpdateAccountGroupDto) {
    return `This action updates a #${id} accountGroup`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountGroup`;
  }
}
