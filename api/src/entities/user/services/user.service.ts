import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { userDTO } from '../models/user.dto';
import { User, userDocument } from '../models/user.schema';
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

    async findOne(email: string): Promise<User> {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new HttpException('User not found', HttpStatus.NOT_FOUND);
        }
        return user;
    }

    async getUser(email: string): Promise<User> {
        return await this.userModel.findOne({ email }).exec();
    }

    async update(id: string, userDTO: userDTO) {
        return await this.userModel.findByIdAndUpdate(id, userDTO, { new: true });
    }

    async delete(id: string): Promise<any> {
        return await this.userModel.findByIdAndRemove(id);
    }
}
