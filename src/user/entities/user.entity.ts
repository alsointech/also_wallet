import { PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 255, unique: false })
    role: string

    @Column({ type: 'varchar', length: 255, unique: false })
    name: string

    @Column({ name: 'last_name', type: 'varchar', length: 255, unique: false })
    lastName: string

    @Column({ type: 'varchar', length: 255, unique: false })
    email: string

    @CreateDateColumn({name:'created_at', default: () => 'LOCALTIMESTAMP' })
    createDate: string

    @UpdateDateColumn({name:'updated_at', default: () => 'LOCALTIMESTAMP' })
    updateDate: string

    @Column({ type: 'boolean', default: true })
    visible: boolean

    /*
    balance
    password
    */
}
