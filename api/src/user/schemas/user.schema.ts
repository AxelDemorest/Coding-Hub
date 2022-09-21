import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type userDocument = User & Document;

@Schema()
export class User {
    @Prop({ required: true })
    first_name: string;

    @Prop({ required: true })
    last_name: string;

    @Prop({ required: true, unique: true, lowercase: true })
    email: string;

    @Prop({ required: true })
    type_user: string;

    @Prop({ default: 'ROLE_USER' })
    role_user: string;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);