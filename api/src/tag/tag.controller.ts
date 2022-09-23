import { Controller, Post, Res, Body, HttpStatus, Get, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { tagDTO } from './dto/tag.dto';
import { Tag } from './schemas/tag.schemas';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { role } from 'src/user/dto/user.dto';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('/tag')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  async addTag(@Res() res, @Body() tagDTO: tagDTO) {
    const newTag = await this.tagService.addTag(tagDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Tag has been submitted successfully!',
      post: newTag,
    });
  }

    @Get('/tags')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.ROLE_ADMIN)
    async getTags(@Res() res): Promise<Tag[]> {
        const tags = await this.tagService.getTags();
        return res.status(HttpStatus.OK).json(tags);
    }
}
