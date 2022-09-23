import { Controller, Post, Res, Body, HttpStatus, Get, UseGuards, Delete, Param, Patch } from '@nestjs/common';
import { TagService } from '../services/tag.service';
import { tagDTO } from '../models/tag.dto';
import { Tag } from '../models/tag.schemas';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/guards/roles.decorator';
import { role } from 'src/entities/user/models/user.dto';

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

  @Patch(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  update(@Param('id') id: string, @Body() tagDTO: tagDTO) {
    return this.tagService.update(id, tagDTO);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  remove(@Param('id') id: string) {
    return this.tagService.delete(id);
  }
}
