import { PrimaryGeneratedColumn, Column, Entity, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
export class Investment {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ name:'investment_type', type: 'varchar', length: 255, unique: false })
    invType: string

    @CreateDateColumn({name:'created_at', default: () => 'LOCALTIMESTAMP' })
    createDate: string

    @UpdateDateColumn({name:'updated_at', default: () => 'LOCALTIMESTAMP' })
    updateDate: string

    // @Column({ type: 'money' })
    @Column({ type: 'int' })
    ammount: number

    @Column({ type: 'text' })
    description: string

    @Column({ type: 'boolean', default: true })
    visible: boolean
}
