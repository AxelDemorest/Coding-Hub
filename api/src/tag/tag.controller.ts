import { Controller, Post, Res, Body, HttpStatus, Get } from '@nestjs/common';
import { TagService } from './tag.service';
import { tagDTO } from './dto/tag.dto';
import { Tag } from './schemas/tag.schemas';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('/tag')
  async addTag(@Res() res, @Body() tagDTO: tagDTO) {
    const newTag = await this.tagService.addTag(tagDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Tag has been submitted successfully!',
      post: newTag,
    });
  }

    @Get('/tags')
    async getTags(@Res() res): Promise<Tag[]> {
        const tags = await this.tagService.getTags();
        return res.status(HttpStatus.OK).json(tags);
    }
}
