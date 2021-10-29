import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { NewBlogPost, ExistingBlogPost } from './interface/blog-post.interface';
import { BlogPost } from './schemas/blog-post.schema';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class BlogPostService {
  constructor(
    @InjectModel(BlogPost.name) private blogPostModel: Model<ExistingBlogPost>,
  ) {}

  async findOne(id: string): Promise<ExistingBlogPost> {
    return await this.blogPostModel.findById(id);
  }

  async findAll(): Promise<ExistingBlogPost[]> {
    return await this.blogPostModel.find();
  }

  async createOne(postContent: NewBlogPost): Promise<ExistingBlogPost> {
    const newPost = new this.blogPostModel(postContent);
    return await newPost.save();
  }

  async updateBlogPost(
    id: string,
    postContent: NewBlogPost,
  ): Promise<ExistingBlogPost> {
    return await this.blogPostModel.findOneAndUpdate({ _id: id }, postContent);
  }

  async deleteBlogPost(id: string): Promise<ExistingBlogPost> {
    return await this.blogPostModel.findOneAndDelete({ _id: id });
  }
}
