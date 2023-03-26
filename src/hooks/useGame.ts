import React from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: string;
  name: String;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = React.useState<Game[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return {
    games,
    error,
    isLoading
  };
};
export default useGames;
