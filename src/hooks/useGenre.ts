import useData from "./useData";

export interface Genre {
  id: string;
  name: String;
  image_background: string;
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;
