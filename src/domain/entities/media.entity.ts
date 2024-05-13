import { Entity, Column, PrimaryGeneratedColumn, Index, ManyToOne } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Media {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  URL: string;

  @Column()
  description: string;

  @ManyToOne(() => User, (user: User) => user.medias)
  public user: User;
}