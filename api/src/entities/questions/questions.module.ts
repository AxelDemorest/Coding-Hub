import { Module } from '@nestjs/common';
import { QuestionsService } from './services/questions.service';
import { QuestionsController } from './controllers/questions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './models/question.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Question', schema: QuestionSchema }])],
  controllers: [QuestionsController],
  providers: [QuestionsService]
})
export class QuestionsModule {}
