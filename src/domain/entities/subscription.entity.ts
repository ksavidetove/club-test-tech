import { Entity, Column, CreateDateColumn, Index, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Media } from './media.entity';

@Entity()
@Index(['followerId', 'followingId'], { unique: true })
@Index(['followerId', 'lastMediaViewed'])
export class Subscription {
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  followerId: number;

  @Column()
  followingId: number;

  @Column()
  lastMediaId: number;

  @Column()
  lastMediaViewed: boolean = false;
}