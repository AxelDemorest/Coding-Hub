/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './controller/app.controller';
import { AuthModule } from '../auth/auth.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PostModule} from "../post/post.module";
import {UserModule} from "../user/user.module";
import {CategoryModule} from "../category/category.module";
import {TopicModule} from "../topic/topic.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: Number(configService.get<number>('DB_PORT')),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
      }),
    }),
    AuthModule,
    PostModule,
    UserModule,
    CategoryModule,
    TopicModule,
    CategoryModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
