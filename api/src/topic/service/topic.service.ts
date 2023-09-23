import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic, TopicStatus } from '../entity/topic.entity';
import { CreateTopicDto } from '../dto/create-topic.dto';
import { Category } from '../../category/entity/category.entity';
import { User } from '../../user/entity/user.entity';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic) private topicsRepository: Repository<Topic>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async findAll(): Promise<Topic[]> {
    return this.topicsRepository.find();
  }

  async findOne(id: number): Promise<Topic> {
    return this.topicsRepository.findOne({
      relations: ['author', 'posts', 'posts.author'],
      where: { id: id },
    });
  }

  async findLatest(limit = 15): Promise<Topic[]> {
    return this.topicsRepository.find({
      relations: ['author', 'posts'],
      order: { created_at: 'DESC' },
      take: limit,
    });
  }

  async create(topic: CreateTopicDto): Promise<Topic> {
    const user = await this.usersRepository.findOne({
      where: { id: topic.authorId },
    });
    const category = await this.categoriesRepository.findOne({
      where: { id: topic.categoryId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!category) {
      throw new NotFoundException('Category not found');
    }

    const newTopic = new Topic();
    newTopic.title = topic.title;
    newTopic.content = topic.content;
    newTopic.status = TopicStatus.PUBLISHED;
    newTopic.author = user;
    newTopic.category = category;

    return this.topicsRepository.save(newTopic);
  }

  async update(id: number, updatedTopic: Partial<Topic>): Promise<Topic> {
    await this.topicsRepository.update(id, updatedTopic);
    return this.topicsRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.topicsRepository.delete(id);
  }
}
