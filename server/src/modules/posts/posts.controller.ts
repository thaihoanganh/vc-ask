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

import { CommentsService } from '../comments/comments.service';
import { VotesService } from '../votes/votes.service';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(
    private postsService: PostsService,
    private commentsService: CommentsService,
    private votesService: VotesService,
  ) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() createPostDto: CreatePostDto, @Request() request: any) {
    const newPost = await this.postsService.create({
      author: request.user._id,
      ...createPostDto,
      createdAt: new Date(),
    });
    return this.postsService.successResponse(newPost, HttpStatus.ACCEPTED);
  }

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const getPosts = await this.postsService
      .findAll(query)
      .populate({ path: 'author', select: '-password' });
    return this.postsService.successResponse(getPosts);
  }

  @Public()
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() param: any) {
    const getPost = await this.postsService.findOne({ _id: param.id });
    return this.postsService.successResponse(getPost);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateOne(
    @Param() param: any,
    @Body() updatePostDto: UpdatePostDto,
    @Request() request: any,
  ) {
    const post = await this.postsService.updateOne(
      {
        _id: param.id,
        author: request.user._id,
      },
      updatePostDto,
    );

    if (!post) {
      return this.postsService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.postsService.successResponse(post);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteOne(@Param() param: any, @Request() request: any) {
    const post = await this.postsService.deleteOne({
      _id: param.id,
      author: request.user._id,
    });

    if (!post) {
      return this.postsService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    this.commentsService.deleteMany({ postId: param.id });
    this.votesService.deleteMany({ postId: param.id });

    return this.postsService.successResponse(null, HttpStatus.ACCEPTED);
  }
}
