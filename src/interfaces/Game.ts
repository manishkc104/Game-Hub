import { Platform } from "./Platform";

export interface Game {
  id: string;
  name: String;
  slug: string;
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
