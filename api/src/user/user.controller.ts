import { Body, Controller, HttpStatus, Get, Post, Res, UseGuards, Delete, Param, Patch } from '@nestjs/common';
import { userDTO } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';
import { role } from './dto/user.dto';
import { Roles } from 'src/auth/guards/roles.decorator';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(role.ROLE_ADMIN)
    async getUsers(@Res() res): Promise<User[]> {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json(users);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userDTO: userDTO) {
        return this.userService.update(id, userDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.userService.delete(id);
    }
}
