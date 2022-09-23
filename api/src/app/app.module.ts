/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './controller/app.controller';
import { AppService } from './service/app.service';
import { UserModule } from '../entities/user/user.module';
import { AuthModule } from '../auth/auth.module';
import { TagModule } from '../entities/tag/tag.module';
import { QuestionsModule } from '../entities/questions/questions.module';
import { ResponseModule } from '../entities/response/response.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from '../auth/guards/roles.guard';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.ivbawji.mongodb.net/coding_hub', { useNewUrlParser: true }),
    AuthModule,
    UserModule,
    TagModule,
    QuestionsModule,
    ResponseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
