import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { TopicService } from '../service/topic.service';
import { Topic } from '../entity/topic.entity';
import {CreateTopicDto} from "../dto/create-topic.dto";

@Controller('api/topics')
export class TopicController {
  constructor(private topicsService: TopicService) {}

  @Get()
  findAll(): Promise<Topic[]> {
    return this.topicsService.findAll();
  }

  @Get('latest')
  async findLatest(): Promise<Topic[]> {
    return this.topicsService.findLatest();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Topic> {
    return this.topicsService.findOne(id);
  }

  @Post()
  create(@Body() topic: CreateTopicDto): Promise<Topic> {
    return this.topicsService.create(topic);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedTopic: Partial<Topic>,
  ): Promise<Topic> {
    return this.topicsService.update(id, updatedTopic);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.topicsService.remove(id);
  }
}
