import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Role } from './role.entity';
import { RoleService } from './role.service';

@UseGuards(JwtAuthGuard)
@Controller('role')
export class RoleController {
    constructor(private readonly roleService: RoleService) { }

    @Post()
    async create(@Body() role: Role) {
        return await this.roleService.create(role);
    }


    @Get()
    async findAll() {
        return await this.roleService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.roleService.findOne(+id);
    }

    @Put()
    async update(@Body() role: Role) {
        return await this.roleService.update(role);
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.roleService.remove(+id);
    }
}
