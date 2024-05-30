import { Test, TestingModule } from '@nestjs/testing';
import { MessageReplyService } from './message_reply.service';

describe('MessageReplyService', () => {
  let service: MessageReplyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MessageReplyService],
    }).compile();

    service = module.get<MessageReplyService>(MessageReplyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
