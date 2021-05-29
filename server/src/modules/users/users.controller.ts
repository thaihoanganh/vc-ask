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
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { Public } from '../../shared/decorators/auth.decorator';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() createUserDto: CreateUserDto) {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(createUserDto.password, salt);

    const getUserByUsername = await this.usersService.findOne({
      username: createUserDto.username,
    });

    if (getUserByUsername) {
      return this.usersService.errorResponse(
        'Object already exists',
        HttpStatus.CONFLICT,
      );
    }

    const newUser = await this.usersService.create({
      ...createUserDto,
      password: hash,
      avatarUrl: '',
      createdAt: new Date(),
    });

    return this.usersService.successResponse(
      {
        _id: newUser._id,
        username: newUser.username,
        avatarUrl: newUser.avatarUrl,
        createdAt: newUser.createdAt,
      },
      HttpStatus.ACCEPTED,
    );
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const getUsers = await this.usersService.findAll(query).select('-password');
    return this.usersService.successResponse(getUsers);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() param: any) {
    const getUser = await this.usersService
      .findOne({ _id: param.id })
      .select('-password');
    return this.usersService.successResponse(getUser);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateOne(@Param() param: any, @Body() updateUserDto: UpdateUserDto) {
    const user = await this.usersService
      .updateOne({ _id: param.id }, updateUserDto)
      .select('-password');

    if (!user) {
      return this.usersService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.usersService.successResponse(user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteOne(@Param() param: any) {
    const user = await this.usersService.deleteOne({ _id: param.id });

    if (!user) {
      return this.usersService.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.usersService.successResponse(null, HttpStatus.ACCEPTED);
  }
}
