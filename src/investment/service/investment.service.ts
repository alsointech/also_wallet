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
    const newInvestment = new Investment()
    newInvestment.invType = payload.invType
    newInvestment.description = payload.description
    newInvestment.ammount = payload.ammountType


    return newInvestment
  }


  findAll() {
    return this.investmentRepo.find()
  }
  /*   findAll() {
    return new Promise((resolve, reject) => {
      this.client.query(
        'SELECT * FROM investments',
        (err, res) => {
          // err ? reject(res) : resolve(res.rows)
          if (err) {
                reject(err)
              }
              resolve(res.rows)
            }
            )
          })
        } */

  findOne(id: number): Promise<Investment | null> {
    const investment = this.investmentRepo.findOneBy({ id })
    if (!investment) {
      throw new NotFoundException(`Investment #${id}] not found`)
    }
    return investment
  }

  update(id: number, updateInvestmentDto: UpdateInvestmentDto) {
    return `This action updates a #${id} investment`;
  }

  remove(id: number) {
    return `This action removes a #${id} investment`;
  }
}
