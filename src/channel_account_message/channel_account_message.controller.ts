import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChannelAccountMessageService } from './channel_account_message.service';
import { CreateChannelAccountMessageDto } from './dto/create-channel_account_message.dto';
import { UpdateChannelAccountMessageDto } from './dto/update-channel_account_message.dto';

@Controller('channel-account-message')
export class ChannelAccountMessageController {
  constructor(private readonly channelAccountMessageService: ChannelAccountMessageService) {}

  @Post()
  create(@Body() createChannelAccountMessageDto: CreateChannelAccountMessageDto) {
    return this.channelAccountMessageService.create(createChannelAccountMessageDto);
  }

  @Get()
  findAll() {
    return this.channelAccountMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelAccountMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelAccountMessageDto: UpdateChannelAccountMessageDto) {
    return this.channelAccountMessageService.update(+id, updateChannelAccountMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelAccountMessageService.remove(+id);
  }
}
