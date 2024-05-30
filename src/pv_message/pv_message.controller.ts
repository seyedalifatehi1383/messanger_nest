import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PvMessageService } from './pv_message.service';
import { CreatePvMessageDto } from './dto/create-pv_message.dto';
import { UpdatePvMessageDto } from './dto/update-pv_message.dto';

@Controller('pv-message')
export class PvMessageController {
  constructor(private readonly pvMessageService: PvMessageService) {}

  @Post()
  create(@Body() createPvMessageDto: CreatePvMessageDto) {
    return this.pvMessageService.create(createPvMessageDto);
  }

  @Get()
  findAll() {
    return this.pvMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pvMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePvMessageDto: UpdatePvMessageDto) {
    return this.pvMessageService.update(+id, updatePvMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pvMessageService.remove(+id);
  }
}
