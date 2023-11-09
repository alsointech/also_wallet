import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { Client } from 'pg';
import { Repository } from 'typeorm';

import { UpdateInvestmentDto } from '../dto/update-investment.dto';
import { Investment } from '../entities/investment.entity';
import { UserService } from '../../user/service/user.service';
// import { UserService } from '../../user/service/user.service';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment) private investmentRepo: Repository<Investment>,
    // @Inject(forwardRef(() => UserService ))
    private userService: UserService
    // private service: AService ,
  ) { }

  async create(payload: CreateInvestmentDto) {
    const newInvestment = this.investmentRepo.create(payload)
    if (payload.userId) {
      const user = await this.userService.findOne(payload.userId)
      newInvestment.user = user
    }
    return this.investmentRepo.save(newInvestment)
  }


  findAll() {
    return this.investmentRepo.find({
      relations: ['user']
    })
  }

  async findOne(id: number): Promise<Investment | null> {
    const investment = await this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id} not found`)
    }
    return investment
  }

  async update(id: number, payload: UpdateInvestmentDto): Promise<Investment | null> {
    const updatedInv = await this.investmentRepo.findOneBy({ id })
    if (!updatedInv) {
      throw new NotFoundException(`Investment #${id} not found`)
    }
    /* if (payload.userId) {
      const user = await this.userService.findOne(payload.userId)
      updatedInv.user = user
    } */
    // overwrite the found item with requested changes
    this.investmentRepo.merge(updatedInv, payload)
    return this.investmentRepo.save(updatedInv)
  }

  async remove(id: number): Promise<Investment | null> {
    const investment = await this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id} not found`)
    }

    // overwrite the found item with requested changes
    this.investmentRepo.merge(investment, { visible: false })
    
    return this.investmentRepo.save(investment)

    // return this.investmentRepo.delete(id)
  }
}
