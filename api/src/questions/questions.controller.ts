import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { QuestionDTO } from './dto/question.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { role } from 'src/user/dto/user.dto';

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
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  async findAll(@Res() res): Promise<QuestionDTO[]> {
    const questions = await this.questionsService.findAll();
    return res.status(HttpStatus.OK).json(questions);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.questionsService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateQuestionDto: QuestionDTO) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
