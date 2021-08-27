import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './role.entity';

@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role) private roleRepository: Repository<Role>,
    ) { }

    create(role: Role) {
        return this.roleRepository.save(role);
    }

    findAll() {
        return this.roleRepository.find();
    }

    findOne(id: number) {
        return this.roleRepository.findOne(id);
    }

    async update(role: Role) {
        const roleFound: Role = await this.roleRepository.findOne(role.id);

        if (roleFound) {
            return this.roleRepository.save(role);
        } else {
            throw new HttpException(
                'El rol a actualizar no existe',
                HttpStatus.NOT_FOUND,
            );
        }
    }

    async remove(id: number) {
        const role: Role = await this.roleRepository.findOne(id);
        return await this.roleRepository.remove(role);
    }
}
