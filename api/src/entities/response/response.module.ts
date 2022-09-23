import { Module } from '@nestjs/common';
import { ResponseService } from './services/response.service';
import { ResponseController } from './controllers/response.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ResponseSchema } from './models/response.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Response', schema: ResponseSchema }])],
  controllers: [ResponseController],
  providers: [ResponseService]
})
export class ResponseModule {}
