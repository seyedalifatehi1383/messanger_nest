import { Test, TestingModule } from '@nestjs/testing';
import { AccountGroupService } from './account_group.service';

describe('AccountGroupService', () => {
  let service: AccountGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountGroupService],
    }).compile();

    service = module.get<AccountGroupService>(AccountGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
