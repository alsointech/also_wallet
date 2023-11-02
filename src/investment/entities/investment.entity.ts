import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity()
export class Investment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255, unique: true })
    invType: string

/*     @Column({ type: 'timestamp with local time zone' })
    createDate: string */

    // @Column({ type: 'money' })
    @Column({ type: 'int' })
    ammount: number

    @Column({ type: 'text' })
    description: string

    @Column({ type: 'boolean', default: true })
    visible: boolean
}
