import { Module } from '@nestjs/common';
import { ResponseService } from './response.service';
import { ResponseController } from './response.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseSchema } from './schemas/response.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Response', schema: ResponseSchema }])],
  controllers: [ResponseController],
  providers: [ResponseService]
})
export class ResponseModule {}
