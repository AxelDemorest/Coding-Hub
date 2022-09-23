import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagSchema } from './models/tag.schemas';
import { TagController } from './controllers/tag.controller';
import { TagService } from './services/tag.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }])],
    providers: [TagService],
    controllers: [TagController]
})
export class TagModule {}
