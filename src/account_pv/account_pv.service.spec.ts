import { Test, TestingModule } from '@nestjs/testing';
import { AccountPvService } from './account_pv.service';

describe('AccountPvService', () => {
  let service: AccountPvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountPvService],
    }).compile();

    service = module.get<AccountPvService>(AccountPvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
