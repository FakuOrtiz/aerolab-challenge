import { searchGames } from "@/services/gameService";
import { Game } from "@/models/game.model";
import { useEffect, useState } from "react";

const useGameDetails = (id: string) => {
  const [game, setGame] = useState<Game | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getGame = async () => {
      setLoading(true);
      setError(null);

      try {
        const game = await searchGames<Game[]>({ type: "DETAILS", id });

        setGame(game[0]);
      } catch (err: Error | unknown) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    getGame();
  }, [id]);

  return { game, loading, error };
};

export default useGameDetails;
