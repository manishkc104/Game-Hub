import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import { Genre } from "../hooks/useGenre";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, isLoading } = useGames(selectedGenre);

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} padding="10px" spacing={3}>
      {isLoading
        ? skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))
        : null}
      {data.map((game) => (
        <GameCardContainer>
          <GameCard key={game.id} game={game} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
