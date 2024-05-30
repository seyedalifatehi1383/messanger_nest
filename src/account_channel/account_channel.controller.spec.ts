import { Test, TestingModule } from '@nestjs/testing';
import { AccountChannelController } from './account_channel.controller';
import { AccountChannelService } from './account_channel.service';

describe('AccountChannelController', () => {
  let controller: AccountChannelController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountChannelController],
      providers: [AccountChannelService],
    }).compile();

    controller = module.get<AccountChannelController>(AccountChannelController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
