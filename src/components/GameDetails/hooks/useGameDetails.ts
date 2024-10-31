import { searchGames } from "@/services/gameService";
import { Game } from "@/models/game.model";
import { useEffect, useState } from "react";

const useGameDetails = (id: string) => {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    const getGame = async () => {
      const game = await searchGames<Game>({ type: "DETAILS", id });

      setGame(game);
    };

    getGame();
  }, [id]);

  return { game };
};

export default useGameDetails;
