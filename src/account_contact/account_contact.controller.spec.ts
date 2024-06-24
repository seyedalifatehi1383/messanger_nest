import { Test, TestingModule } from '@nestjs/testing';
import { AccountContactController } from './account_contact.controller';
import { AccountContactService } from './account_contact.service';

describe('AccountContactController', () => {
  let controller: AccountContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccountContactController],
      providers: [AccountContactService],
    }).compile();

    controller = module.get<AccountContactController>(AccountContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
