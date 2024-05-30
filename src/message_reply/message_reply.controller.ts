import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MessageReplyService } from './message_reply.service';
import { CreateMessageReplyDto } from './dto/create-message_reply.dto';
import { UpdateMessageReplyDto } from './dto/update-message_reply.dto';

@Controller('message-reply')
export class MessageReplyController {
  constructor(private readonly messageReplyService: MessageReplyService) {}

  @Post()
  create(@Body() createMessageReplyDto: CreateMessageReplyDto) {
    return this.messageReplyService.create(createMessageReplyDto);
  }

  @Get()
  findAll() {
    return this.messageReplyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.messageReplyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMessageReplyDto: UpdateMessageReplyDto) {
    return this.messageReplyService.update(+id, updateMessageReplyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.messageReplyService.remove(+id);
  }
}
