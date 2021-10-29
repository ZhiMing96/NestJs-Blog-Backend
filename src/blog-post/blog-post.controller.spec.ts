import { Test, TestingModule } from '@nestjs/testing';
import { BlogPostController } from './blog-post.controller';

describe('BlogPostController', () => {
  let controller: BlogPostController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlogPostController],
    }).compile();

    controller = module.get<BlogPostController>(BlogPostController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
