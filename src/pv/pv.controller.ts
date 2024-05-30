import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PvService } from './pv.service';
import { CreatePvDto } from './dto/create-pv.dto';
import { UpdatePvDto } from './dto/update-pv.dto';

@Controller('pv')
export class PvController {
  constructor(private readonly pvService: PvService) {}

  @Post()
  create(@Body() createPvDto: CreatePvDto) {
    return this.pvService.create(createPvDto);
  }

  @Get()
  findAll() {
    return this.pvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePvDto: UpdatePvDto) {
    return this.pvService.update(+id, updatePvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pvService.remove(+id);
  }
}
