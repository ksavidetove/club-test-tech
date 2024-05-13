import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Subscription } from '../entities/subscription.entity';
import { Media } from '../entities/media.entity';
import { CreateUserDto, PaginatedFeedDto } from 'src/application/dtos';
import { GetPaginatedFeedDto } from '../../application/dtos/getPaginatedFeed.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Media)
    private mediasRepository: Repository<Media>,
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}
  
  async create(user: CreateUserDto): Promise<User> {
    return this.usersRepository.save(user);
  }

  async findOne(id: number): Promise<User> {
    return this.usersRepository.findOne({where: {id}});
  }

  async delete(id: number) {
    return this.usersRepository.delete(id);
  }

  async update(user: Partial<User>) {
    this.usersRepository.update(user.id, user);
  }

  async follow(followerId: number, followingId: number) {
    const followerExists = await this.usersRepository.exists({where: {id: followerId}});
    const followed = await this.usersRepository.find({where: {id: followingId}});

    if (!followerExists || !followed) {
      throw new Error('User not found');
    }

    const lastMedia: Media | null = await this.mediasRepository.findOne({where: {user: {id: followingId}}, order: {updatedAt: 'DESC'}});

    const subscriptionExists = await this.subscriptionRepository.exists({where: {followerId, followingId}});

    if (subscriptionExists) return;

    await this.subscriptionRepository.save({followerId, followingId, lastMediaId: lastMedia?.id, lastMediaViewed: false} as any);
  }

  async getFeed(userId: number, limit: number, offset: number): Promise<PaginatedFeedDto> {
    const user = await this.usersRepository.findOne({where: {id: userId}});
    if (!user) {
      throw new Error('User not found');
    }

    const [subscriptions, count] = await this.subscriptionRepository.findAndCount({
      where: {followerId: userId, lastMediaViewed: false},
      skip: offset,
      take: limit
    });
    const mediaIds = subscriptions.map(subscription => subscription.lastMediaId);

    await this.subscriptionRepository.update({followerId: user.id}, {lastMediaViewed: true});

    const medias = await this.mediasRepository.find({where: {id: In(mediaIds)}});
    const result = new PaginatedFeedDto();
    result.limit = limit;
    result.offset = offset;
    result.total = count;
    result.results = medias;

    return result
  }
}