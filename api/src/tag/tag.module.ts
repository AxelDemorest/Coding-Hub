import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TagSchema } from './schemas/tag.schemas';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Tag', schema: TagSchema }])],
    providers: [TagService],
    controllers: [TagController]
})
export class TagModule {}
