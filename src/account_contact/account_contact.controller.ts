import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountContactService } from './account_contact.service';
import { CreateAccountContactDto } from './dto/create-account_contact.dto';
import { UpdateAccountContactDto } from './dto/update-account_contact.dto';

@Controller('account-contact')
export class AccountContactController {
  constructor(private readonly accountContactService: AccountContactService) {}

  @Post()
  create(@Body() createAccountContactDto: CreateAccountContactDto) {
    return this.accountContactService.create(createAccountContactDto);
  }

  @Get()
  findAll() {
    return this.accountContactService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountContactService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountContactDto: UpdateAccountContactDto) {
    return this.accountContactService.update(+id, updateAccountContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountContactService.remove(+id);
  }
}
