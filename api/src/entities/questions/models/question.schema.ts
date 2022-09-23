import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { User } from "src/entities/user/models/user.schema";

export type questionDocument = Question & Document;

@Schema()
export class Question {
    @Prop({ required: true })
    title: string;

    @Prop({ required: true })
    content: string;

    @Prop({ required: true })
    is_resolved: boolean;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author_id: User;
    
    // @Prop({ required: true })
    // author_id: string;

    @Prop({ default: Date.now() })
    created_at: Date;

    @Prop({ required: false })
    resolve_at: Date;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
