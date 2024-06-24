import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateAccountDto } from './dto/update-account.dto';
import { AccountEntity } from './entities/account.entity';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AccountService {
  constructor(private readonly databaseService: DatabaseService) {}
  async createAccount(accountEntity: AccountEntity) {

    const result = await this.databaseService.query(
      `INSERT INTO Account(name, accountID, profile, userID, isOnline, lastTimeOnline) VALUES (?, ?, ?, ?, ?, ?)`,
      [
        accountEntity.name,
        accountEntity.accountID,
        accountEntity.profile,
        accountEntity.userID,
        true,
        Date.now,
      ],
    );
    if (result.affectedRows == 0)
      throw new HttpException('Unsuccessful create', HttpStatus.FORBIDDEN);
    else return accountEntity;
  }

  findAll() {
    return `This action returns all account`;
  }

  findOne(id: number) {
    return `This action returns a #${id} account`;
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
