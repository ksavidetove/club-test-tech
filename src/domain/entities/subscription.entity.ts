import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({
    nullable: true,
  })
  lastMediaId?: number | null;

  @Column()
  lastMediaViewed: boolean = false;
}