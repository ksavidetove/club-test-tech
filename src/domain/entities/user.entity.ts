import { Entity, Column, PrimaryGeneratedColumn, Index, OneToMany } from 'typeorm';
import { Media } from './media.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  description: string;

  @Column()
  picture: string;

  @OneToMany(() => Media, (media: Media) => media.user, { cascade: true })
  public medias?: Media[];
}