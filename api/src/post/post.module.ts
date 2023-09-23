import { Module } from '@nestjs/common';
import { PostController } from './controller/post.controller';
import { PostService } from './service/post.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entity/post.entity';
import { UserModule } from '../user/user.module';
import { TopicModule } from '../topic/topic.module';

@Module({
  imports: [TypeOrmModule.forFeature([Post]), UserModule, TopicModule],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule {}
