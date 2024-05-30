import { Test, TestingModule } from '@nestjs/testing';
import { AccountGroupController } from './account_group.controller';
import { AccountGroupService } from './account_group.service';

describe('AccountGroupController', () => {
  let controller: AccountGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountGroupController],
      providers: [AccountGroupService],
    }).compile();

    controller = module.get<AccountGroupController>(AccountGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
