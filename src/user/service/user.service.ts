import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from 'pg';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

/* @Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
 */
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) { }


  create(payload: CreateUserDto) {
    const newUser = this.userRepo.create(payload)

    return this.userRepo.save(newUser)
  }


  findAll() {
    return this.userRepo.find()
  }

  async findOne(id: number): Promise<User | null> {
    const user = await this.userRepo.findOneBy({ id })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`)
    }
    return user
  }

  async update(id: number, payload: UpdateUserDto): Promise<User | null> {
    const user = await this.userRepo.findOneBy({ id })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`)
    }
    
    // overwrite the found item with requested changes
    this.userRepo.merge(user, payload)
    return this.userRepo.save(user)
  }

  async remove(id: number): Promise<User | null> {
    const user = await this.userRepo.findOneBy({ id })
    if (!user) {
      throw new NotFoundException(`User #${id} not found`)
    }

    // overwrite the found item with requested changes
    this.userRepo.merge(user, { visible: false })
    
    return this.userRepo.save(user)

    // return this.userRepo.delete(id)
  }
}