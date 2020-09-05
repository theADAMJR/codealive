import { model, Document, Schema } from 'mongoose';

export interface EmailDocument extends Document {
  _id: string;
  name: string;
}

export const SavedEmail = model<EmailDocument>('email', new Schema({
  _id: String,
  name: String
}));