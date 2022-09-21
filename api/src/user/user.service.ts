import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDTO } from './dto/user.dto';
import { User, userDocument } from './schemas/user.schema';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<userDocument>) { }

    async addUser(userDTO: userDTO): Promise<User> {
        const newUser = new this.userModel(userDTO);
        return newUser.save();
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }
}
