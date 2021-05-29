import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../../shared/services/base.service';
import { Comment, CommentDocument } from './schemas/comment.schema';

@Injectable()
export class CommentsService extends BaseService<CommentDocument> {
  constructor(
    @InjectModel(Comment.name)
    private commentsModel: Model<CommentDocument>,
  ) {
    super(commentsModel);
  }

  findAll({ page = 1, limit = 20, postId, ...query }) {
    const filter: any = {};
    for (const key in query) {
      filter[key] = { $regex: query[key], $options: 'i' };
    }

    return this.commentsModel
      .find({ postId: postId, ...filter })
      .skip((page - 1) * Number(limit))
      .limit(Number(limit));
  }

  async deleteMany(query: any) {
    return this.commentsModel.deleteMany(query);
  }
}
