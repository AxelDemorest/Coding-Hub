import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
import { role } from '../dto/user.dto';

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
    password: string;

    @Prop({ required: true })
    type_user: string;

    @Prop({ default: 0 })
    role_user: role;

    @Prop({ default: Date.now() })
    created_at: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);