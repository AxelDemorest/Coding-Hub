import { Module } from '@nestjs/common';
import { TopicService } from './service/topic.service';
import { TopicController } from './controller/topic.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entity/topic.entity';
import { CategoryModule } from '../category/category.module';
import { UserModule } from '../user/user.module';
import { User } from '../user/entity/user.entity';
import { Category } from '../category/entity/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Topic, User, Category]),
    CategoryModule,
    UserModule,
  ],
  providers: [TopicService],
  controllers: [TopicController],
  exports: [TopicService],
})
export class TopicModule {}
