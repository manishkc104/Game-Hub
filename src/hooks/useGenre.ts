import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";
import ms from "ms";

export interface Genre {
  id: number;
  name: String;
  image_background: string;
}

const apiClient = new ApiClient<Genre>("/genres");

// const useGenres = () => ({ data: genres, isLoading: false, error: null });

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    //This is 24 hours
    staleTime: ms('24h'),
  });
export default useGenres;
