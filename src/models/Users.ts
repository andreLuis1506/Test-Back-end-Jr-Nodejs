import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('Users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    email: string

    @Column()
    senha: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    upadatedAt: Date;

}