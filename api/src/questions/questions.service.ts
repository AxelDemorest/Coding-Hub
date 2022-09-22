import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { create } from 'domain';
import { Model } from 'mongoose';
import { QuestionDTO } from './dto/question.dto';
import { questionDocument } from './schemas/question.schema';

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

  update(id: number, QuestionDto: QuestionDTO) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
