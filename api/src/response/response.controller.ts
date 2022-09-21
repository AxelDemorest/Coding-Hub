import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseDto } from './dto/response.dto';

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
  async findAll(@Res() res): Promise<ResponseDto[]> {
    const responses = await this.responseService.findAll();
    return res.status(HttpStatus.OK).json(responses);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.responseService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateResponseDto: ResponseDto) {
    return this.responseService.update(+id, updateResponseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.responseService.remove(+id);
  }
}
