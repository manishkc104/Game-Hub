import useGames from "../hooks/useGame";

const GameGrid = () => {
  const { games } = useGames();
  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GameGrid;
