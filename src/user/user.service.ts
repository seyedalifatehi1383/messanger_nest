import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class UserService {
  constructor(private readonly databaseService: DatabaseService) {}

  async createUser(userEntity: UserEntity) {
    const result = await this.databaseService.query(
      `INSERT INTO User(username, password, email) VALUES (?, ?, ?)`,
      [
        userEntity.username,
        userEntity.password,
        userEntity.email,
      ],
    );
    if (result.affectedRows == 0)
      throw new HttpException('Unsuccessful create', HttpStatus.FORBIDDEN);
    else return userEntity;
  }

  async findOneUser(ID: number) {
    const result: UserEntity[] = await this.databaseService.query(
      `SELECT * FROM User where ID = ${ID}`,
    );
    if (result.length === 0)
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    else return result[0];
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
