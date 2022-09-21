import { Body, Controller, HttpStatus, Get, Post, Res } from '@nestjs/common';
import { userDTO } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post('/user')
    async addUser(@Res() res, @Body() userDTO: userDTO) {
        const newUser = await this.userService.addUser(userDTO);
        return res.status(HttpStatus.OK).json({
            message: 'User has been submitted successfully!',
            post: newUser,
        });
    }

    @Get('/users')
    async getUsers(@Res() res): Promise<User[]> {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }
}
