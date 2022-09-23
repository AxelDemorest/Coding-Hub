import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Question } from "src/entities/questions/models/question.schema";
import { User } from "src/entities/user/models/user.schema";

export type responseDocument = Response & Document;

@Schema()
export class Response {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Question' })
    question_id: Question;

    @Prop({ required: true })
    content: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    author_id: User;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const ResponseSchema = SchemaFactory.createForClass(Response);
