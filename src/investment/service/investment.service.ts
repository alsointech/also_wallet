import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { Client } from 'pg';
import { Repository } from 'typeorm';

import { UpdateInvestmentDto } from '../dto/update-investment.dto';
import { Investment } from '../entities/investment.entity';

@Injectable()
export class InvestmentService {
  constructor(
    @InjectRepository(Investment) private investmentRepo: Repository<Investment>,
    @Inject('PG') private client: Client,
  ) { }


  create(payload: CreateInvestmentDto) {
    const newInvestment = this.investmentRepo.create(payload)

    return this.investmentRepo.save(newInvestment)
  }


  findAll() {
    return this.investmentRepo.find()
  }

  async findOne(id: number): Promise<Investment | null> {
    const investment = await this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id} not found`)
    }
    return investment
  }

  async update(id: number, payload: UpdateInvestmentDto): Promise<Investment | null> {
    const investment = await this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id} not found`)
    }
    
    // overwrite the found item with requested changes
    this.investmentRepo.merge(investment, payload)
    return this.investmentRepo.save(investment)
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
