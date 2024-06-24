import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountChannelService } from './account_channel.service';
import { CreateAccountChannelDto } from './dto/create-account_channel.dto';
import { UpdateAccountChannelDto } from './dto/update-account_channel.dto';

@Controller('account-channel')
export class AccountChannelController {
  constructor(private readonly accountChannelService: AccountChannelService) {}

  @Post()
  create(@Body() createAccountChannelDto: CreateAccountChannelDto) {
    return this.accountChannelService.create(createAccountChannelDto);
  }

  @Get()
  findAll() {
    return this.accountChannelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountChannelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountChannelDto: UpdateAccountChannelDto) {
    return this.accountChannelService.update(+id, updateAccountChannelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountChannelService.remove(+id);
  }
}
