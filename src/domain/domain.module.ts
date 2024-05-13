import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { MediaService } from './services/media.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Subscription } from './entities/subscription.entity';
import { Media } from './entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Subscription, Media])],
  providers: [UserService, MediaService],
  exports: [UserService, MediaService],
})
export class DomainModule {}
