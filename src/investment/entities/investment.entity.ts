import { User } from '../../user/entities/user.entity'
import {
    PrimaryGeneratedColumn,
    Column,
    Entity,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn
} from 'typeorm'


@Entity()
export class Investment {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @CreateDateColumn({ name: 'created_at', default: () => 'CURRENT_TIMESTAMP' })
    createDate: string

    @UpdateDateColumn({ name: 'updated_at', default: () => 'CURRENT_TIMESTAMP' })
    updateDate: string

    @Column({ name: 'investment_type', type: 'varchar', length: 255, unique: false })
    invType: string

    // @Column({ type: 'money' })
    @Column({ type: 'int' })
    ammount: number

    @Column({ type: 'text' })
    description: string

    @Column({ type: 'boolean', default: true })
    visible: boolean

    @ManyToOne(() => User, (user) => user.investments)
    /* join is not mandatory unless name modification */
    @JoinColumn({ name: 'user_id' })
    @Column({ name: 'user_id' })
    userId: string
}
