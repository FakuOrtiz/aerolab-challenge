import { InputEvent } from "@/constants/customTypes";
import { searchGames } from "@/services/gameService";
import { ResultGame } from "@/models/game.model";
import { useCallback, useEffect, useState } from "react";

const useSearchGames = () => {
  const [input, setInput] = useState("");
  const [games, setGames] = useState<ResultGame[]>([]);
  const [defaultGames, setDefaultGames] = useState<ResultGame[]>([]);

  const getDefaultGames = useCallback(async () => {
    if (!defaultGames.length) {
      const searchedGames = await searchGames<ResultGame[]>({
        type: "DEFAULT",
      });

      if (searchedGames?.length) {
        setDefaultGames(searchedGames);
        setGames(searchedGames);
      }

      return;
    }

    setGames(defaultGames);
  }, [defaultGames]);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        const onSearchGame = async () => {
          const searchedGames = await searchGames<ResultGame[]>({
            type: "SEARCH",
            name: input,
          });

          if (searchedGames?.length) {
            setGames(searchedGames);
          } else {
            getDefaultGames();
          }
        };

        onSearchGame();
      } else {
        getDefaultGames();
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [input, getDefaultGames]);

  const updateInput = (e: InputEvent) => setInput(e.target.value);

  const clearInput = () => {
    setInput("");
    getDefaultGames();
  };

  return { input, updateInput, games, clearInput };
};

export default useSearchGames;
