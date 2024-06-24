import { Injectable } from '@nestjs/common';
import { CreateAccountPvDto } from './dto/create-account_pv.dto';
import { UpdateAccountPvDto } from './dto/update-account_pv.dto';

@Injectable()
export class AccountPvService {
  create(createAccountPvDto: CreateAccountPvDto) {
    return 'This action adds a new accountPv';
  }

  findAll() {
    return `This action returns all accountPv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accountPv`;
  }

  update(id: number, updateAccountPvDto: UpdateAccountPvDto) {
    return `This action updates a #${id} accountPv`;
  }

  remove(id: number) {
    return `This action removes a #${id} accountPv`;
  }
}
