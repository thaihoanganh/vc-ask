import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type CommentDocument = Comment & mongoose.Document;

@Schema()
export class Comment {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  postId: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  author: User;

  @Prop({ type: String })
  content: string;

  @Prop({ type: Date })
  createdAt: Date;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
