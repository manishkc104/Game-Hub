import React from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Genre {
  id: string;
  name: String;
}

export interface FetchGenresResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genre, setGenre] = React.useState<Genre[]>([]);
  const [error, setError] = React.useState("");
  const [isLoading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    apiClient
      .get<FetchGenresResponse>("/genres ")
      .then((res) => {
        setGenre(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, []);

  return {
    genre,
    error,
    isLoading,
  };
};
export default useGenre;
