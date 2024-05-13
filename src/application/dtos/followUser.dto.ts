import { IsDefined, IsNumber} from 'class-validator';

export class FollowUserDto {
  @IsNumber()
  @IsDefined()
  followerId: number;

  @IsNumber()
  @IsDefined()
  followingId: number;
}