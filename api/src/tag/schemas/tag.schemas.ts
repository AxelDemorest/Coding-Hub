import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type tagDocument = Tag & Document;

@Schema()
export class Tag {
    @Prop({ required: true })
    tag_name: string;
}

export const TagSchema = SchemaFactory.createForClass(Tag);
