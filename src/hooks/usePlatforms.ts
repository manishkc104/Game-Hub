import ApiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { Platform } from "../interfaces/Platform";



const apiClient = new ApiClient<Platform>("/platforms/lists/parents");

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll,
    //This is 24 hours
    staleTime: ms("24h"),
  });
export default usePlatforms;
