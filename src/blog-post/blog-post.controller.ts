import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BlogPostService } from './blog-post.service';
import { CreatePostDto } from './dto/post.dto';
import { ExistingBlogPost } from './interface/blog-post.interface';

@Controller('blog-post')
export class BlogPostController {
  constructor(private blogPostService: BlogPostService) {}

  @Get()
  findAll(): Promise<ExistingBlogPost[]> {
    return this.blogPostService.findAll();
  }

  @Get(':id')
  findOne(@Param() params: { id: string }): Promise<ExistingBlogPost> {
    const { id } = params;
    if (!id) throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
    return this.blogPostService.findOne(id);
  }

  @Post()
  createPost(@Body() createPostDto: CreatePostDto): Promise<ExistingBlogPost> {
    return this.blogPostService.createOne(createPostDto);
  }

  @Put('/:id')
  updatePost(
    @Body() updatedPost: CreatePostDto,
    @Param('id') id: string,
  ): Promise<ExistingBlogPost> {
    if (!id) throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
    return this.blogPostService.updateBlogPost(id, updatedPost);
  }

  @Delete('/:id')
  deletePost(@Param('id') id: string): Promise<ExistingBlogPost> {
    if (!id) throw new HttpException('Invalid Id', HttpStatus.BAD_REQUEST);
    return this.blogPostService.deleteBlogPost(id);
  }
}
