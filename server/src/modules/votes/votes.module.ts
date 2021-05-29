import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { PostsModule } from '../posts/posts.module';

import { Vote, VoteSchema } from './schemas/vote.schema';

import { VotesController } from './votes.controller';
import { VotesService } from './votes.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Vote.name,
        schema: VoteSchema,
      },
    ]),
    forwardRef(() => PostsModule),
  ],
  controllers: [VotesController],
  providers: [VotesService],
  exports: [VotesService],
})
export class VotesModule {}
