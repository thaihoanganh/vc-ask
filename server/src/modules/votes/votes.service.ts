import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { BaseService } from '../../shared/services/base.service';

import { Vote, VoteDocument } from './schemas/vote.schema';

@Injectable()
export class VotesService extends BaseService<VoteDocument> {
  constructor(@InjectModel(Vote.name) private votesModel: Model<VoteDocument>) {
    super(votesModel);
  }

  async deleteMany(query: any) {
    return this.votesModel.deleteMany(query);
  }
}
