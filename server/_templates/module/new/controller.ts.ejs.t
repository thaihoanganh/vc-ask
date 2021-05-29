---
to: src/modules/<%= h.lowercaseFirstLetter(name) %>/<%= h.lowercaseFirstLetter(name) %>.controller.ts
---

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

import { Create<%= h.capitalizeFirstLetter(name, true) %>Dto } from './dto/create-<%= h.lowercaseFirstLetter(name, true) %>.dto';
import { Update<%= h.capitalizeFirstLetter(name, true) %>Dto } from './dto/update-<%= h.lowercaseFirstLetter(name, true) %>.dto';

import { <%= h.capitalizeFirstLetter(name) %>Service } from './<%= h.lowercaseFirstLetter(name) %>.service';

@Controller('<%= h.lowercaseFirstLetter(name) %>')
export class <%= h.capitalizeFirstLetter(name) %>Controller {
  constructor(private <%= h.lowercaseFirstLetter(name) %>Service: <%= h.capitalizeFirstLetter(name) %>Service) {}

  @Post()
  @HttpCode(HttpStatus.ACCEPTED)
  async create(@Body() create<%= h.capitalizeFirstLetter(name, true) %>Dto: Create<%= h.capitalizeFirstLetter(name, true) %>Dto) {
    const new<%= h.capitalizeFirstLetter(name, true) %> = await this.<%= h.lowercaseFirstLetter(name) %>Service.create(create<%= h.capitalizeFirstLetter(name, true) %>Dto);
    return this.<%= h.lowercaseFirstLetter(name) %>Service.successResponse(new<%= h.capitalizeFirstLetter(name, true) %>, HttpStatus.ACCEPTED);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async findAll(@Query() query: any) {
    const get<%= h.capitalizeFirstLetter(name) %> = await this.<%= h.lowercaseFirstLetter(name) %>Service.findAll(query);
    return this.<%= h.lowercaseFirstLetter(name) %>Service.successResponse(get<%= h.capitalizeFirstLetter(name) %>);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param() param: any) {
    const get<%= h.capitalizeFirstLetter(name, true) %> = await this.<%= h.lowercaseFirstLetter(name) %>Service.findOne({ _id: param.id });
    return this.<%= h.lowercaseFirstLetter(name) %>Service.successResponse(get<%= h.capitalizeFirstLetter(name, true) %>);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  async updateOne(@Param() param: any, @Body() update<%= h.capitalizeFirstLetter(name, true) %>Dto: Update<%= h.capitalizeFirstLetter(name, true) %>Dto) {
    const <%= h.lowercaseFirstLetter(name, true) %> = await this.<%= h.lowercaseFirstLetter(name) %>Service.updateOne(
      { _id: param.id },
      update<%= h.capitalizeFirstLetter(name, true) %>Dto,
    );

    if (!<%= h.lowercaseFirstLetter(name, true) %>) {
      return this.<%= h.lowercaseFirstLetter(name) %>Service.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.<%= h.lowercaseFirstLetter(name) %>Service.successResponse(<%= h.lowercaseFirstLetter(name, true) %>);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  async deleteOne(@Param() param: any) {
    const <%= h.lowercaseFirstLetter(name, true) %> = await this.<%= h.lowercaseFirstLetter(name) %>Service.deleteOne({ _id: param.id });

    if (!<%= h.lowercaseFirstLetter(name, true) %>) {
      return this.<%= h.lowercaseFirstLetter(name) %>Service.errorResponse(
        'Object not found',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.<%= h.lowercaseFirstLetter(name) %>Service.successResponse(null, HttpStatus.ACCEPTED);
  }
}
