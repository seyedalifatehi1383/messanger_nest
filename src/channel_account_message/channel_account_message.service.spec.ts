import { Test, TestingModule } from '@nestjs/testing';
import { ChannelAccountMessageService } from './channel_account_message.service';

describe('ChannelAccountMessageService', () => {
  let service: ChannelAccountMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChannelAccountMessageService],
    }).compile();

    service = module.get<ChannelAccountMessageService>(ChannelAccountMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
