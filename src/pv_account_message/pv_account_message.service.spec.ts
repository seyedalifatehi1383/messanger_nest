import { Test, TestingModule } from '@nestjs/testing';
import { PvAccountMessageService } from './pv_account_message.service';

describe('PvAccountMessageService', () => {
  let service: PvAccountMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvAccountMessageService],
    }).compile();

    service = module.get<PvAccountMessageService>(PvAccountMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
