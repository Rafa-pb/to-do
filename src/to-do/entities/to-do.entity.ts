import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ToDo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  idade: number;

  @Column({ default: true })
  ativo: boolean;
}
