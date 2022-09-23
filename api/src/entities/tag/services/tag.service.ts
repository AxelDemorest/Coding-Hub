import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { tagDTO } from '../models/tag.dto';
import { Tag, tagDocument } from '../models/tag.schemas';

@Injectable()
export class TagService {
  constructor(
    @InjectModel('Tag') private readonly tagModel: Model<tagDocument>,
  ) {}

  async addTag(tagDTO: tagDTO): Promise<Tag> {
    const newTag = new this.tagModel(tagDTO);
    return newTag.save();
  }

  async getTags(): Promise<Tag[]> {
    const tags = await this.tagModel.find().exec();
    return tags;
  }

  async update(id: string, tagDTO: tagDTO) {
    return await this.tagModel.findByIdAndUpdate(id, tagDTO, { new: true });
  }

  async delete(id: string): Promise<any> {
    return await this.tagModel.findByIdAndRemove(id);
  }
}
