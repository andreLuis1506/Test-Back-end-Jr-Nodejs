import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@Entity('Users')
export default class User {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column({unique: true})
    @IsEmail()
    email: string

    @Column()
    @MaxLength(20, {message: 'O tamanho maximo a senha precisa ser de 20 caracteres'})
    @MinLength(6, {message: 'O tamanho minimo a senha precisa ser de 6 caracteres'})
    senha: string

    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;

    @UpdateDateColumn({name: 'updated_at'})
    upadatedAt: Date;

}