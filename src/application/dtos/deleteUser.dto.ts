import { IsDefined, IsNumber} from 'class-validator';

export class DeleteUserDto {
  @IsNumber()
  @IsDefined()
  id: number;
}