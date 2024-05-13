import { IsDefined, IsNumber } from "class-validator";

export class GetPaginatedFeedDto {
  @IsNumber()
  @IsDefined()
  userId: number;

  @IsNumber()
  @IsDefined()
  limit: number;

  @IsNumber()
  @IsDefined()
  offset: number;
}