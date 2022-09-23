import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { QuestionDTO } from '../models/question.dto';
import { questionDocument } from '../models/question.schema';

@Injectable()
export class QuestionsService {

  constructor(
    @InjectModel('Question') private readonly questionModel: Model<questionDocument>,
  ) {}

  async create(QuestionDto: QuestionDTO): Promise<QuestionDTO> {
    const createdQuestion = new this.questionModel(QuestionDto);
    return createdQuestion.save();
  }
  
  async findAll(): Promise<QuestionDTO[]> {
    const questions = await this.questionModel.find().exec();
    return questions;
  }

  async update(id: string, QuestionDto: QuestionDTO) {
    return await this.questionModel.findByIdAndUpdate(id, QuestionDto, { new: true });
  }

  async remove(id: string): Promise<any> {
    return await this.questionModel.findByIdAndRemove(id);
  }
}
