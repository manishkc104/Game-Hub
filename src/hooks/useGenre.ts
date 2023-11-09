import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiClient from "../services/api-client";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: String;
  image_background: string;
}

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genre>>("/genres").then((res) => res.data),
    //This is 24 hours
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGenres;
