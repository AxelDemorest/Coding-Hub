import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entity/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
  ) {}

  async findAllInTopic(id: number): Promise<Post[]> {
    return this.postsRepository.find({
      relations: ['author'],
      where: { topic: { id: id } },
      order: { created_at: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({
      where: { id: id },
    });
  }

  async create(post: Post): Promise<Post> {
    return this.postsRepository.save(post);
  }

  async update(id: number, updatedPost: Partial<Post>): Promise<Post> {
    await this.postsRepository.update(id, updatedPost);
    return this.postsRepository.findOne({
      where: { id: id },
    });
  }

  async remove(id: number): Promise<void> {
    await this.postsRepository.delete(id);
  }
}
