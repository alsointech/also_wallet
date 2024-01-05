import { Inject, Injectable, NotFoundException, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { Client } from 'pg';
import { FindOptionsWhere, Repository } from 'typeorm';

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
      newInvestment.userId = user.id
    }
    return this.investmentRepo.save(newInvestment)
  }


  findAll(params?) {
    if (params) {
      const where: FindOptionsWhere<Investment> = {}
      return this.investmentRepo.find({
        where
      })
    }
    return this.investmentRepo.find()
  }

  async findOne(id: string): Promise<Investment | null> {
    const investment = await this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id} not found`)
    }
    return investment
  }

  async update(id: string, payload: UpdateInvestmentDto): Promise<Investment | null> {
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

  async remove(id: string): Promise<Investment | null> {
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
