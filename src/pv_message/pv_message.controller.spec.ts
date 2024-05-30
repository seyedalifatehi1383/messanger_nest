import { Test, TestingModule } from '@nestjs/testing';
import { PvMessageController } from './pv_message.controller';
import { PvMessageService } from './pv_message.service';

describe('PvMessageController', () => {
  let controller: PvMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PvMessageController],
      providers: [PvMessageService],
    }).compile();

    controller = module.get<PvMessageController>(PvMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
