import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Client } from 'pg';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import * as bcrypt from 'bcrypt'


@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) { }


  async create(payload: CreateUserDto) {

    const newUser = this.userRepo.create(payload)

    // 10 hash iterations
    const hashedPassword = await bcrypt.hash(newUser.password, 10)

    newUser.password = hashedPassword

    return this.userRepo.save(newUser)

  }


  findAll() {

    return this.userRepo.find({

      relations: ['investments']

    })
  }

  async findOne(id: number): Promise<User | null> {

    const user = await this.userRepo.findOne({
      
      where: { id },

      relations: ['investments']

    })

    if (!user) {

      throw new NotFoundException(`User #${id} not found`)

    }

    return user
  }

  async findByEmail(email: string) {

    const user = await this.userRepo.findOneBy({ email })

    if (!user) {

      throw new NotFoundException(`user #${email} not found`)

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
