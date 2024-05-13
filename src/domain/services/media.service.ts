import { Injectable } from '@nestjs/common';
import { Media } from '../entities/media.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreateMediaDto, UpdateMediaDto } from 'src/application/dtos';
import { Subscription } from '../entities/subscription.entity';

@Injectable()
export class MediaService {
  constructor(
    @InjectRepository(Media)
    private mediasRepository: Repository<Media>,
    @InjectRepository(Subscription)
    private subscriptionRepository: Repository<Subscription>,
  ) {}
  
  async create(media: CreateMediaDto): Promise<Media> {
    return this.mediasRepository.save(media);
  }

  async delete(id: number) {
    return this.mediasRepository.delete(id);
  }

  async update(updateMedia: UpdateMediaDto) {
    const media = await this.mediasRepository.findOne({where: {id: updateMedia.id}});
    if (!media) {
      throw new Error('Media not found');
    }

    await this.subscriptionRepository.update(media.user.id, {lastMediaId: media.id, lastMediaViewed: false});
    return this.mediasRepository.update(media.id, {...media, ...updateMedia});
  }
}