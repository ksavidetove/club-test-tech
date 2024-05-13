import { IsDefined, IsNumber} from 'class-validator';

export class DeleteMediaDto {
  @IsNumber()
  @IsDefined()
  id: number;

  @IsNumber()
  @IsDefined()
  userId: number;
}