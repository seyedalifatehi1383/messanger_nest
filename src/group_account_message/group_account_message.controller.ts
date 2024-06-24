import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GroupAccountMessageService } from './group_account_message.service';
import { CreateGroupAccountMessageDto } from './dto/create-group_account_message.dto';
import { UpdateGroupAccountMessageDto } from './dto/update-group_account_message.dto';

@Controller('group-account-message')
export class GroupAccountMessageController {
  constructor(private readonly groupAccountMessageService: GroupAccountMessageService) {}

  @Post()
  create(@Body() createGroupAccountMessageDto: CreateGroupAccountMessageDto) {
    return this.groupAccountMessageService.create(createGroupAccountMessageDto);
  }

  @Get()
  findAll() {
    return this.groupAccountMessageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupAccountMessageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupAccountMessageDto: UpdateGroupAccountMessageDto) {
    return this.groupAccountMessageService.update(+id, updateGroupAccountMessageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupAccountMessageService.remove(+id);
  }
}
