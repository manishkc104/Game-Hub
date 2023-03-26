import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, isLoading } = useGames();

  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} padding="10px" spacing={10}>
      {isLoading
        ? skeleton.map((skeleton) => <GameCardSkeleton key={skeleton} />)
        : null}
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
