import { searchGames } from "@/services/gameService";
import { Game } from "@/models/game.model";
import { useEffect, useState } from "react";

const useGameDetails = (id: string) => {
  const [game, setGame] = useState<Game | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getGame = async () => {
      setIsLoading(true);

      const game = await searchGames<Game[]>({ type: "DETAILS", id });

      setGame(game[0]);

      setIsLoading(false);
    };

    getGame();
  }, [id]);

  return { game, isLoading };
};

export default useGameDetails;
