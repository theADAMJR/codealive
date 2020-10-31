import { model, Document, Schema } from 'mongoose';

export interface BlogDocument extends Document {
  _id: string;
  title: string;
  body: string;
  imageURL: string;
  authorId: string;
}

export const SavedBlog = model<BlogDocument>('blog', new Schema({
  _id: String,
  title: String,
  body: String,
  imageURL: String,
  authorId: String
}));