import { searchGames } from "@/services/game";
import { Game } from "@/services/game/game.model";
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
