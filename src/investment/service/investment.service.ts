import { Inject, Injectable } from '@nestjs/common';
import { CreateInvestmentDto } from '../dto/create-investment.dto';
import { UpdateInvestmentDto } from '../dto/update-investment.dto';
import { Client } from 'pg';
import { rejects } from 'assert';
import { error } from 'console';

@Injectable()
export class InvestmentService {
  constructor(
    @Inject('PG') private dbClient: Client,
  ) { }
  private id = 1
  private investments = [
    {
      id: this.id,
      invType: "renta fija",
      createdAt: "2023-01-10",
      description: "click green",
      visible: true,
    }
  ]

  create(payload: any) {
    ++this.id
    const newMessage: any = {
      id: this.id,
      ...payload,
      createdAt: "2023-01-10",
      visible: true
    }
    this.investments.push(newMessage)

    return newMessage
  }

  findAll() {
    /*     return new Promise((resolve, reject) => {
          this.dbClient.query(
            'SELECT * FROM investments',
            (err, res) => {
              // err ? reject(res) : resolve(res.rows)
              if (err) {
                reject(err)
              }
              resolve(res.rows)
            }
          )
        }) */
        console.log('user: ' + this.dbClient.user);
        
     this.dbClient.user


  }

  findOne(id: number) {
    return `This action returns a #${id} investment`;
  }

  update(id: number, updateInvestmentDto: UpdateInvestmentDto) {
    return `This action updates a #${id} investment`;
  }

  remove(id: number) {
    return `This action removes a #${id} investment`;
  }
}
