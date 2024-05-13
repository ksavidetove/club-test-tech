import { IsDefined, IsNumber, IsOptional } from "class-validator";

export class GetPaginatedFeedDto {
  @IsNumber()
  @IsOptional()
  limit: number = 10;

  @IsNumber()
  @IsOptional()
  offset: number = 0;
}