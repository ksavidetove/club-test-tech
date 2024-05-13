import { IsDefined, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  picture: string;
}
