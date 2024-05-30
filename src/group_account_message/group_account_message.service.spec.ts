import { Test, TestingModule } from '@nestjs/testing';
import { GroupAccountMessageService } from './group_account_message.service';

describe('GroupAccountMessageService', () => {
  let service: GroupAccountMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroupAccountMessageService],
    }).compile();

    service = module.get<GroupAccountMessageService>(GroupAccountMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
