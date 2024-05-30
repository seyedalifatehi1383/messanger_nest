import { Test, TestingModule } from '@nestjs/testing';
import { PvAccountMessageController } from './pv_account_message.controller';
import { PvAccountMessageService } from './pv_account_message.service';

describe('PvAccountMessageController', () => {
  let controller: PvAccountMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvAccountMessageController],
      providers: [PvAccountMessageService],
    }).compile();

    controller = module.get<PvAccountMessageController>(PvAccountMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
