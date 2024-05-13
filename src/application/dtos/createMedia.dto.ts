import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMediaDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  URL: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsDefined()
  userId: number;
}
