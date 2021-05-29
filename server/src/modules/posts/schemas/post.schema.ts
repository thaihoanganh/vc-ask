import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { User } from '../../users/schemas/user.schema';

export type PostDocument = Post & mongoose.Document;

@Schema()
export class Post {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  author: User;

  @Prop({ type: String })
  content: string;

  @Prop([{ type: String }])
  tags: string[];

  @Prop({ type: Date })
  createdAt: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
