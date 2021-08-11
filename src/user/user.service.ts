import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  create(user: User) {
    return this.userRepository.save(user);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOne(id);
  }

  async update(user: User) {
    const userFound: User = await this.userRepository.findOne(user.id);

    if (userFound) {
      return this.userRepository.save(user);
    } else {
      throw new HttpException(
        'El usuario a actualizar no existe',
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async remove(id: number) {
    const user: User = await this.userRepository.findOne(id);
    return await this.userRepository.remove(user);
  }
}
