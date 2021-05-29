import { HttpException } from '@nestjs/common';
import { Document, Model } from 'mongoose';

export class BaseService<T extends Document> {
  constructor(private model: Model<T>) {}

  successResponse(data: any, statusCode = 200) {
    return {
      success: true,
      statusCode,
      data,
    };
  }

  errorResponse(message = 'Something Error', statusCode = 400) {
    throw new HttpException(message, statusCode);
  }

  create(createDto: any) {
    return this.model.create(createDto);
  }

  findAll(query = {}) {
    return this.model.find(query);
  }

  findOne(query: any) {
    if (query._id) {
      return this.model.findById(query._id);
    }
    return this.model.findOne(query);
  }

  updateOne(query: any, updateOneDto: any) {
    if (query._id) {
      return this.model.findByIdAndUpdate(query._id, updateOneDto, {
        new: true,
      });
    }
    return this.model.findOneAndUpdate(query, updateOneDto, { new: true });
  }

  deleteOne(query: any) {
    if (query._id) {
      return this.model.findByIdAndDelete(query._id);
    }
    return this.model.findOneAndDelete(query);
  }
}
