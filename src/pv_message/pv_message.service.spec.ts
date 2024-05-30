import { Test, TestingModule } from '@nestjs/testing';
import { PvMessageService } from './pv_message.service';

describe('PvMessageService', () => {
  let service: PvMessageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PvMessageService],
    }).compile();

    service = module.get<PvMessageService>(PvMessageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
