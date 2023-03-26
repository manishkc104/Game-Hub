import useData from "./useData";

export interface Genre {
  id: string;
  name: String;
}

const useGenres = () => useData<Genre>("/genres");
export default useGenres;
