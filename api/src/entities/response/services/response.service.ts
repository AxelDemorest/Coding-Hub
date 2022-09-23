import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ResponseDto } from '../models/response.dto';
import { responseDocument } from '../models/response.schema';

@Injectable()
export class ResponseService {

  constructor(
    @InjectModel('Response') private readonly responseModel: Model<responseDocument>,
  ) {}

  async create(ResponseDto: ResponseDto): Promise<ResponseDto> {
    const createdResponse = new this.responseModel(ResponseDto);
    return createdResponse.save();
  }

  async findAll(): Promise<ResponseDto[]> {
    const responses = await this.responseModel.find().exec();
    return responses;
  }

  findOne(id: number) {
    return `This action returns a #${id} response`;
  }

  async update(id: string, ResponseDto: ResponseDto) {
    return await this.responseModel.findByIdAndUpdate(id, ResponseDto, { new: true });
  }

  async remove(id: string): Promise<any> {
    return await this.responseModel.findByIdAndRemove(id);
  }
}
