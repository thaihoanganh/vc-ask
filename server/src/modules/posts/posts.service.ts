import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '../../shared/services/base.service';
import { Post, PostDocument } from './schemas/post.schema';

@Injectable()
export class PostsService extends BaseService<PostDocument> {
  constructor(@InjectModel(Post.name) private postsModel: Model<PostDocument>) {
    super(postsModel);
  }

  findAll({ page = 1, limit = 20, ...query }) {
    const filter: any = {};
    for (const key in query) {
      filter[key] = { $regex: query[key], $options: 'i' };
    }

    return this.postsModel
      .find(filter)
      .skip((page - 1) * Number(limit))
      .limit(Number(limit));
  }
}
