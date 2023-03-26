import useGenres, { Genre } from "../hooks/useGenre";

const GenreList = () => {
  const { data } = useGenres();
  return <div></div>;
};

export default GenreList;
