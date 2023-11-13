import { Heading } from "@chakra-ui/react";
import useGenres from "../hooks/useGenre";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const { data: genres } = useGenres();

  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const genre = genres?.results.find((g) => g.id === genreId);

  const heading = `${"" || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
