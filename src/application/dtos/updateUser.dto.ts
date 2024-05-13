import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @IsNumber()
  @IsDefined()
  id: number;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  picture: string;
}
