import { Test, TestingModule } from '@nestjs/testing';
import { AccountPvController } from './account_pv.controller';
import { AccountPvService } from './account_pv.service';

describe('AccountPvController', () => {
  let controller: AccountPvController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountPvController],
      providers: [AccountPvService],
    }).compile();

    controller = module.get<AccountPvController>(AccountPvController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
