import apiClient, { FetchResponse } from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FetchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
    //This is 24 hours
    staleTime: 24 * 60 * 60 * 1000,
  });
export default usePlatforms;