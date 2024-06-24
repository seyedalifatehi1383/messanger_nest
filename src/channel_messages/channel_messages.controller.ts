import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ChannelMessagesService } from './channel_messages.service';
import { CreateChannelMessageDto } from './dto/create-channel_message.dto';
import { UpdateChannelMessageDto } from './dto/update-channel_message.dto';

@Controller('channel-messages')
export class ChannelMessagesController {
  constructor(private readonly channelMessagesService: ChannelMessagesService) {}

  @Post()
  create(@Body() createChannelMessageDto: CreateChannelMessageDto) {
    return this.channelMessagesService.create(createChannelMessageDto);
  }

  @Get()
  findAll() {
    return this.channelMessagesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.channelMessagesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChannelMessageDto: UpdateChannelMessageDto) {
    return this.channelMessagesService.update(+id, updateChannelMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.channelMessagesService.remove(+id);
  }
}
