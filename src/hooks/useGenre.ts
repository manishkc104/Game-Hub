import { useQuery } from "@tanstack/react-query";
import ApiClient from "../services/api-client";

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
    staleTime: 24 * 60 * 60 * 1000,
  });
export default useGenres;
