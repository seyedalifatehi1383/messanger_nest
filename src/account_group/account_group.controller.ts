import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountGroupService } from './account_group.service';
import { CreateAccountGroupDto } from './dto/create-account_group.dto';
import { UpdateAccountGroupDto } from './dto/update-account_group.dto';

@Controller('account-group')
export class AccountGroupController {
  constructor(private readonly accountGroupService: AccountGroupService) {}

  @Post()
  create(@Body() createAccountGroupDto: CreateAccountGroupDto) {
    return this.accountGroupService.create(createAccountGroupDto);
  }

  @Get()
  findAll() {
    return this.accountGroupService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountGroupService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountGroupDto: UpdateAccountGroupDto) {
    return this.accountGroupService.update(+id, updateAccountGroupDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountGroupService.remove(+id);
  }
}
