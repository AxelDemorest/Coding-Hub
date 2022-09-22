import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionDTO } from './dto/question.dto';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post('/question')
  async create(@Res() res, @Body() QuestionDto: QuestionDTO) {
    const newQuestion = await this.questionsService.create(QuestionDto);
    return res.status(HttpStatus.OK).json({
      message: 'Question has been submitted successfully!',
      post: newQuestion,
    });
  }

  @Get('/questions')
  async findAll(@Res() res): Promise<QuestionDTO[]> {
    const questions = await this.questionsService.findAll();
    return res.status(HttpStatus.OK).json(questions);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.questionsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() QuestionDto: QuestionDTO) {
    return this.questionsService.update(id, QuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(id);
  }
}
