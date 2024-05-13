import { Media } from "src/domain/entities/media.entity";

export class PaginatedFeedDto {
  total: number;
  limit: number;
  offset: number;
  results: Media[];
}