import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { TopicStatus } from '../entity/topic.entity';

export class CreateTopicDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  content: string;

  @IsNotEmpty()
  @IsEnum(TopicStatus)
  status: TopicStatus;

  @IsNumber()
  @IsNotEmpty()
  categoryId: number;

  @IsNumber()
  @IsNotEmpty()
  authorId: number;
}
