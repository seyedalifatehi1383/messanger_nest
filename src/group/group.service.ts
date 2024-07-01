import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateGroupDto } from './dto/update-group.dto';
import { GroupEntity } from './entities/group.entity';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class GroupService {
  constructor(private readonly databaseService: DatabaseService) {}
  async createGroup(groupEntity: GroupEntity) {

    const result = await this.databaseService.query(
      `INSERT INTO Group(name, profile, GroupID, messagesNumber) VALUES (?, ?, ?, ?)`,
      [
        groupEntity.name,
        groupEntity.profile,
        groupEntity.GroupID,
        groupEntity.messagesNumber
      ],
    );
    if (result.affectedRows == 0)
      throw new HttpException('Unsuccessful create', HttpStatus.FORBIDDEN);
    else return groupEntity;
  }

  findAll() {
    return `This action returns all group`;
  }

  findOne(id: number) {
    return `This action returns a #${id} group`;
  }

  update(id: number, updateGroupDto: UpdateGroupDto) {
    return `This action updates a #${id} group`;
  }

  remove(id: number) {
    return `This action removes a #${id} group`;
  }
}
