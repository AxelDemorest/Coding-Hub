import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseDto } from './dto/response.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { role } from 'src/user/dto/user.dto';
import { Roles } from 'src/auth/guards/roles.decorator';

@Controller('response')
export class ResponseController {
  constructor(private readonly responseService: ResponseService) {}

  @Post('/response')
  async create(@Res() res, @Body() createResponseDto: ResponseDto) {
    const newResponse = await this.responseService.create(createResponseDto);
    return res.status(HttpStatus.OK).json({
      message: 'Response has been submitted successfully!',
      post: newResponse,
    });
  }

  @Get('/responses')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  async findAll(@Res() res): Promise<ResponseDto[]> {
    const responses = await this.responseService.findAll();
    return res.status(HttpStatus.OK).json(responses);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(role.ROLE_ADMIN)
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() ResponseDto: ResponseDto) {
    return this.responseService.update(id, ResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responseService.remove(id);
  }
}
