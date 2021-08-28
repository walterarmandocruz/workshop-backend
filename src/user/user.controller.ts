import { Controller, Post, Body, Get, Param, Delete, Put } from '@nestjs/common';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() user: User) {
        return await this.userService.create(user);
    }

    @Get()
    async findAll() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.userService.findOne(+id);
    }

    @Put()
    async update(@Body() user: User) {
        return await this.userService.update(user);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.userService.remove(+id);
    }
}
