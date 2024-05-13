import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateMediaDto {
  @IsNumber()
  @IsDefined()
  id: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  URL: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsNumber()
  @IsDefined()
  userId: number;
}
