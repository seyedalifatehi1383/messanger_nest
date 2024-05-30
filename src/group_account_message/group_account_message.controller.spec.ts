import { Test, TestingModule } from '@nestjs/testing';
import { GroupAccountMessageController } from './group_account_message.controller';
import { GroupAccountMessageService } from './group_account_message.service';

describe('GroupAccountMessageController', () => {
  let controller: GroupAccountMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupAccountMessageController],
      providers: [GroupAccountMessageService],
    }).compile();

    controller = module.get<GroupAccountMessageController>(GroupAccountMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
