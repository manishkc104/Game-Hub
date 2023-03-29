import genres from "../data/genres";
import useData from "./useData";

export interface Genre {
  id: number;
  name: String;
  image_background: string;
}

const useGenres = () => ({ data: genres, isLoading: false, error: null });
export default useGenres;
