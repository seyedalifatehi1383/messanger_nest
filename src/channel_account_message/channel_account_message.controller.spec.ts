import { Test, TestingModule } from '@nestjs/testing';
import { ChannelAccountMessageController } from './channel_account_message.controller';
import { ChannelAccountMessageService } from './channel_account_message.service';

describe('ChannelAccountMessageController', () => {
  let controller: ChannelAccountMessageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ChannelAccountMessageController],
      providers: [ChannelAccountMessageService],
    }).compile();

    controller = module.get<ChannelAccountMessageController>(ChannelAccountMessageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
