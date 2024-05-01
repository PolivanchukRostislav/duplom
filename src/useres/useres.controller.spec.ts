import { Test, TestingModule } from '@nestjs/testing';
import { UseresController } from './useres.controller';
import { UseresService } from './useres.service';

describe('UseresController', () => {
  let controller: UseresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UseresController],
      providers: [UseresService],
    }).compile();

    controller = module.get<UseresController>(UseresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
