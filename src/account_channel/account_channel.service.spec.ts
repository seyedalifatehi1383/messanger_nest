import { Test, TestingModule } from '@nestjs/testing';
import { AccountChannelService } from './account_channel.service';

describe('AccountChannelService', () => {
  let service: AccountChannelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AccountChannelService],
    }).compile();

    service = module.get<AccountChannelService>(AccountChannelService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
