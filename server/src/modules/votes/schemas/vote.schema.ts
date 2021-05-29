import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { Post } from '../../posts/schemas/post.schema';
import { User } from '../../users/schemas/user.schema';

export type VoteDocument = Vote & mongoose.Document;

@Schema()
export class Vote {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Post.name })
  postId: Post;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: User.name })
  userId: User;

  @Prop({ type: Date })
  createdAt: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
