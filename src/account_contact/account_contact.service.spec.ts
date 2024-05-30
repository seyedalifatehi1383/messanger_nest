import { Test, TestingModule } from '@nestjs/testing';
import { AccountContactService } from './account_contact.service';

describe('AccountContactService', () => {
  let service: AccountContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountContactService],
    }).compile();

    service = module.get<AccountContactService>(AccountContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
