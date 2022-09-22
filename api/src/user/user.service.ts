import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDTO } from './dto/user.dto';
import { User, userDocument } from './schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<userDocument>) { }

    async addUser(userDTO: userDTO): Promise<User> {
        const salt = await bcrypt.genSalt();
        const hash = await bcrypt.hash(userDTO.password, salt);
        userDTO.password = hash;
        const newUser = new this.userModel(userDTO);
        return newUser.save();
    }

    async getUsers(): Promise<User[]> {
        const users = await this.userModel.find().exec();
        return users;
    }

    async getUser(email): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }
}
