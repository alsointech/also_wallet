import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { UpdateInvestmentDto } from '../dto/update-investment.dto';
import { UserService } from '../../user/service/user.service';
import { Investment } from '../entities/investment.entity';

import { FindOptionsWhere, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class InvestmentService {
    constructor(

        @InjectRepository(Investment) private investmentRepo: Repository<Investment>,

        private userService: UserService

    ) { }

    async create(payload: CreateInvestmentDto) {

        const newInvestment = this.investmentRepo.create(payload)

        if (payload.userId) {

            const user = await this.userService.findOne(payload.userId)

            newInvestment.userId = user.id

        }

        return this.investmentRepo.save(newInvestment)

    }


    async findAll(userId?) {

        if (userId) {

            return this.investmentRepo.find({

                where: { userId }

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

        this.investmentRepo.merge(updatedInv, payload)

        return this.investmentRepo.save(updatedInv)

    }

    async remove(id: string): Promise<Investment | null> {

        const investment = await this.investmentRepo.findOneBy({ id })

        if (!investment) {

            throw new NotFoundException(`Investment #${id} not found`)

        }

        this.investmentRepo.merge(investment, { visible: false })

        return this.investmentRepo.save(investment)

    }
}
