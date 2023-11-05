import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn } from 'typeorm'

@Entity()
export class Investment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255, unique: false })
    invType: string

    /* @CreateDateColumn({ type: 'timestamp with time zone' })
    createDate: string */

    // @Column({ type: 'money' })
    @Column({ type: 'int' })
    ammount: number

    @Column({ type: 'text' })
    description: string

    @Column({ type: 'boolean', default: true })
    visible: boolean
}
