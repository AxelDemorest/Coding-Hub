import {
  Controller,
  Get,
  Post as HttpPost,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from '../service/post.service';
import { Post } from '../entity/post.entity';

@Controller('api/posts')
export class PostController {
  constructor(private postsService: PostService) {}

  @Get('topic/:id')
  findAll(@Param('id') id: number): Promise<Post[]> {
    return this.postsService.findAllInTopic(id);
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Post> {
    return this.postsService.findOne(id);
  }

  @HttpPost()
  create(@Body() post: Post): Promise<Post> {
    return this.postsService.create(post);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() updatedPost: Partial<Post>,
  ): Promise<Post> {
    return this.postsService.update(id, updatedPost);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.postsService.remove(id);
  }
}
