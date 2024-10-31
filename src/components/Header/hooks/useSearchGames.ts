import { InputEvent } from "@/constants/customTypes";
import { searchGames } from "@/services/game";
import { SearchedGame } from "@/services/game/game.model";
import { useCallback, useEffect, useState } from "react";
import data from "./exampleData.json";

const useSearchGames = () => {
  const [input, setInput] = useState("");
  const [games, setGames] = useState<SearchedGame[]>([]);
  const [defaultGames, setDefaultGames] = useState<SearchedGame[]>([]);

  const getDefaultGames = useCallback(async () => {
    if (!defaultGames.length) {
      // const searchedGames = await searchGames();
      const searchedGames = data;

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
          const searchedGames = await searchGames(input);

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
    }, 500);

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
