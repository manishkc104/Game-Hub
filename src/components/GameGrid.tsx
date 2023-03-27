import { SimpleGrid } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, isLoading } = useGames(gameQuery);

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
