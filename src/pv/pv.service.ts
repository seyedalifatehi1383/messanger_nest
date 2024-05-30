import { Injectable } from '@nestjs/common';
import { CreatePvDto } from './dto/create-pv.dto';
import { UpdatePvDto } from './dto/update-pv.dto';

@Injectable()
export class PvService {
  create(createPvDto: CreatePvDto) {
    return 'This action adds a new pv';
  }

  findAll() {
    return `This action returns all pv`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pv`;
  }

  update(id: number, updatePvDto: UpdatePvDto) {
    return `This action updates a #${id} pv`;
  }

  remove(id: number) {
    return `This action removes a #${id} pv`;
  }
}
