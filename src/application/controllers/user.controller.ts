import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { UserService } from 'src/domain/services/user.service';
import { CreateMediaDto, CreateUserDto, DeleteMediaDto, DeleteUserDto, FollowUserDto, GetPaginatedFeedDto, UpdateMediaDto, UpdateUserDto } from '../dtos';
import { User } from 'src/domain/entities/user.entity';
import { BodyAndParam } from '../decorators/BodyAndParam.decorator';
import { Media } from 'src/domain/entities/media.entity';
import { MediaService } from 'src/domain/services/media.service';
import { QueryAndParam } from '../decorators/QueryAndParam.decorator';


@Controller('user')
export default class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly mediaService: MediaService,
  ) {}

  @Post()
  async createUser(
    @Body() createUserDto: CreateUserDto,
  ): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Get(':id')
  async getUser(@Param() getUserDto: DeleteUserDto): Promise<User> {
    return this.userService.findOne(getUserDto.id);
  }

  @Delete(':id')
  async removeUser(@Param() deleteUserDto: DeleteUserDto) {
    await this.userService.delete(deleteUserDto.id);
  }

  @Put(':id')
  async updateUser(
    @Param() updateUserDto: UpdateUserDto,
  ) {
    await this.userService.update(updateUserDto);
  }

  @Post(':followerId/follow')
  async followUser(
    @BodyAndParam() followUserDto: FollowUserDto,
  ) {
    await this.userService.follow(followUserDto.followerId, followUserDto.followingId);
  }

  @Post(':userId/media')
  async createMedia(
    @BodyAndParam() createMediaDto: CreateMediaDto,
  ): Promise<Media> {
    return this.mediaService.create(createMediaDto);
  }

  @Delete(':userId/media/:id')
  async removeMedia(@Param() deleteMediaDto: DeleteMediaDto) {
    await this.mediaService.delete(deleteMediaDto.id);
  }

  @Put(':userId/media')
  async updateMedia(
    @BodyAndParam() updateMediaDto: UpdateMediaDto,
  ) {
    await this.mediaService.update(updateMediaDto);
  }

  @Get(':id/feed')
  async getFeed(@Param() userDto: DeleteUserDto, @Query() getPaginatedFeedDto :GetPaginatedFeedDto) {
    return this.userService.getFeed(userDto.id, getPaginatedFeedDto.limit, getPaginatedFeedDto.offset);
  }
}
