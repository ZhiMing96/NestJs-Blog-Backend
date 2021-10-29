export type ISOstring = string;
export type base64String = string;

export class CreatePostDto {
  title: string;
  content: string;
  author: string;
  imgUrl: base64String;
}
