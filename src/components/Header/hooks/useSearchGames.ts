import { InputEvent } from "@/constants/customTypes";
import { searchGames } from "@/services/game";
import { SearchedGame } from "@/services/game/game.model";
import { useEffect, useState } from "react";

const useSearchGames = () => {
  const [input, setInput] = useState("");
  const [games, setGames] = useState<SearchedGame[]>([]);
  const [recommendedGames, setRecommendedGames] = useState<SearchedGame[]>([]);

  // debounce
  useEffect(() => {
    const timer = setTimeout(() => {
      if (input) {
        const onSearchGame = async () => {
          const searchedGames = await searchGames(input);

          if (searchedGames?.length) {
            setGames(searchedGames);
          } else {
            getRecommendedGames();
          }
        };

        onSearchGame();
      } else {
        getRecommendedGames();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  const updateInput = (e: InputEvent) => setInput(e.target.value);

  const clearInput = () => {
    setInput("");
    getRecommendedGames();
  };

  const getRecommendedGames = async () => {
    if (!recommendedGames.length) {
      const searchedGames = await searchGames();

      if (searchedGames?.length) {
        setRecommendedGames(searchedGames);
        setGames(searchedGames);
      }

      return;
    }

    setGames(recommendedGames);
  };

  return { input, updateInput, games, clearInput };
};

export default useSearchGames;
