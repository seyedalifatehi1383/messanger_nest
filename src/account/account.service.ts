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

  async findAllAccounts(): Promise<AccountEntity[]> {
    return this.databaseService.query(`SELECT * FROM Account`);
  }

  async findOneAccount(ID: number) {
    const result: AccountEntity[] = await this.databaseService.query(
      `SELECT * FROM Account where ID = ${ID}`,
    );
    if (result.length === 0)
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    else return result[0];
  }

  async updateAccount(ID: number, updateAccountDto: UpdateAccountDto) {
    const updateResult = await this.databaseService.query(
      `UPDATE Account SET name= ?, accountID= ?, profile= ?, isOnline= ?, lastTimeOnline= ? WHERE ID = ${ID}`,
      [
        updateAccountDto.name,
        updateAccountDto.accountID,
        updateAccountDto.profile,
        updateAccountDto.isOnline,
        updateAccountDto.lastTimeOnline,
      ],
    );
    if (updateResult.changedRows === 0 && updateResult.affectedRows == 0)
      throw new HttpException('record Not found', HttpStatus.NOT_FOUND);
    else return updateAccountDto;
  }

  async removeAccount(ID: number) {
    const result = await this.findOneAccount(ID);
    await this.databaseService.query(`DELETE FROM Account where ID = ${ID}`);
    return result;
  }
}
