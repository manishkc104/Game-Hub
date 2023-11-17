import { Genre } from "../hooks/useGenre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

export interface Game {
  id: string;
  name: String;
  slug: string;
  genres: Genre[];
  publishers: Publisher[];
  description_raw: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}
