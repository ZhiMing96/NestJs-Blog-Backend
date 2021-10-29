import { base64String, ISOstring } from '../dto/post.dto';

export interface NewBlogPost {
  title: string;
  content: string;
  author: string;
  imgUrl: base64String;
}

export interface ExistingBlogPost extends NewBlogPost {
  id: string;
  createdAt: ISOstring;
}
