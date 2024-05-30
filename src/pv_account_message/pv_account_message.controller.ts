import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PvAccountMessageService } from './pv_account_message.service';
import { CreatePvAccountMessageDto } from './dto/create-pv_account_message.dto';
import { UpdatePvAccountMessageDto } from './dto/update-pv_account_message.dto';

@Controller('pv-account-message')
export class PvAccountMessageController {
  constructor(private readonly pvAccountMessageService: PvAccountMessageService) {}

  @Post()
  create(@Body() createPvAccountMessageDto: CreatePvAccountMessageDto) {
    return this.pvAccountMessageService.create(createPvAccountMessageDto);
  }

  @Get()
  findAll() {
    return this.pvAccountMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pvAccountMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePvAccountMessageDto: UpdatePvAccountMessageDto) {
    return this.pvAccountMessageService.update(+id, updatePvAccountMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pvAccountMessageService.remove(+id);
  }
}
