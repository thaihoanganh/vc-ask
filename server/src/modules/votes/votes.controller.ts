import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Request,
} from '@nestjs/common';

import { Public } from '../../shared/decorators/auth.decorator';

import { PostsService } from '../posts/posts.service';
import { VotesService } from './votes.service';

@Controller('votes')
export class VotesController {
  constructor(
    private votesService: VotesService,
    private postsService: PostsService,
  ) {}

  @Post(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Param() param: any, @Request() request: any) {
    const getPostById = await this.postsService.findOne({ _id: param.id });

    if (!getPostById) {
      return this.votesService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const getVote = await this.votesService.findOne({
      postId: param.id,
      userId: request.user._id,
    });

    if (getVote) {
      return this.votesService.errorResponse(
        'Object already exists',
        HttpStatus.CONFLICT,
      );
    }

    const newVote = await this.votesService.create({
      postId: param.id,
      userId: request.user._id,
      createdAt: new Date(),
    });
    return this.votesService.successResponse(newVote, HttpStatus.ACCEPTED);
  }

  @Public()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findAll(@Param() param: any, @Query() query: any) {
    const getVotes = await this.votesService.findAll({
      postId: param.id,
      ...query,
    });
    return this.votesService.successResponse(getVotes);
  }

  @Public()
  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteOne(@Param() param: any, @Request() request: any) {
    const vote = await this.votesService.deleteOne({
      _id: param.id,
      userId: request.user._id,
    });

    if (!vote) {
      return this.votesService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.votesService.successResponse(null, HttpStatus.ACCEPTED);
  }
}
