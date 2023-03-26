import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, isLoading } = useGames();

  const skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4 }} padding="10px" spacing={10}>
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
