import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccountPvService } from './account_pv.service';
import { CreateAccountPvDto } from './dto/create-account_pv.dto';
import { UpdateAccountPvDto } from './dto/update-account_pv.dto';

@Controller('account-pv')
export class AccountPvController {
  constructor(private readonly accountPvService: AccountPvService) {}

  @Post()
  create(@Body() createAccountPvDto: CreateAccountPvDto) {
    return this.accountPvService.create(createAccountPvDto);
  }

  @Get()
  findAll() {
    return this.accountPvService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accountPvService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountPvDto: UpdateAccountPvDto) {
    return this.accountPvService.update(+id, updateAccountPvDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountPvService.remove(+id);
  }
}
