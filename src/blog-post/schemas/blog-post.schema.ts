import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { base64String, ISOstring } from '../dto/post.dto';

@Schema()
export class BlogPost {
  @Prop()
  title: string;

  @Prop()
  content: string;

  @Prop()
  author: string;

  @Prop()
  createdAt: ISOstring;

  @Prop()
  imgUrl: base64String;
}
export const BlogPostSchema = SchemaFactory.createForClass(BlogPost);
