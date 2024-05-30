import { Test, TestingModule } from '@nestjs/testing';
import { MessageReplyController } from './message_reply.controller';
import { MessageReplyService } from './message_reply.service';

describe('MessageReplyController', () => {
  let controller: MessageReplyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MessageReplyController],
      providers: [MessageReplyService],
    }).compile();

    controller = module.get<MessageReplyController>(MessageReplyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
