import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';

import { Public } from '../../shared/decorators/auth.decorator';

import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

import { CommentsService } from './comments.service';
import { PostsService } from '../posts/posts.service';

@Controller('comments')
export class CommentsController {
  constructor(
    private commentsService: CommentsService,
    private postsService: PostsService,
  ) {}

  @Post(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async create(
    @Param() param: any,
    @Body() createCommentDto: CreateCommentDto,
    @Request() request: any,
  ) {
    const getPostById = await this.postsService.findOne({ _id: param.id });

    if (!getPostById) {
      return this.commentsService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const newComment = await this.commentsService.create({
      postId: param.id,
      author: request.user._id,
      content: createCommentDto.content,
      createdAt: new Date(),
    });
    return this.commentsService.successResponse(
      newComment,
      HttpStatus.ACCEPTED,
    );
  }

  @Public()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findAll(@Param() param: any, @Query() query: any) {
    const getComments = await this.commentsService
      .findAll({ postId: param.id, ...query })
      .populate({ path: 'author', select: '-password' });
    return this.commentsService.successResponse(getComments);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateOne(
    @Param() param: any,
    @Body() updateCommentDto: UpdateCommentDto,
  ) {
    const comment = await this.commentsService.updateOne(
      { _id: param.id },
      updateCommentDto,
    );

    if (!comment) {
      return this.commentsService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.commentsService.successResponse(comment);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteOne(@Param() param: any) {
    const comment = await this.commentsService.deleteOne({ _id: param.id });

    if (!comment) {
      return this.commentsService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.commentsService.successResponse(null, HttpStatus.ACCEPTED);
  }
}
