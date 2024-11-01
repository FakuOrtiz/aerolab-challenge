import { SavedGame } from "@/models/game.model";
import { useEffect, useState } from "react";

const useSavedGames = () => {
  const [savedGames, setSavedGames] = useState<SavedGame[] | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && !savedGames) {
      const localStorageGames = localStorage.getItem("games");

      if (localStorageGames && localStorageGames !== "undefined") {
        setSavedGames(JSON.parse(localStorageGames));
      } else {
        setSavedGames([]);
      }
    }
  }, [savedGames]);

  const saveGame = (game: SavedGame) => {
    let localStorageGames: string | undefined | SavedGame[] =
      localStorage.getItem("games") as string;

    if (localStorageGames && localStorageGames !== "undefined") {
      localStorageGames = JSON.parse(
        localStorageGames as string
      ) as SavedGame[];

      localStorageGames.unshift(game);

      setSavedGames(localStorageGames);
      localStorage.setItem("games", JSON.stringify(localStorageGames));
    } else {
      setSavedGames([game]);
      localStorage.setItem("games", JSON.stringify([game]));
    }
  };

  const removeSavedGame = (id: number) => {
    let localStorageGames = JSON.parse(
      localStorage.getItem("games")!
    ) as SavedGame[];

    localStorageGames = localStorageGames.filter((games) => games.id !== id);

    setSavedGames(localStorageGames);
    localStorage.setItem("games", JSON.stringify(localStorageGames));
  };

  const orderSavedGames = (type: "last_added" | "newest" | "oldest") => {
    if (!savedGames?.length) return;

    let orderedGames: SavedGame[] = [];

    if (type === "last_added") {
      const localStorageGames = localStorage.getItem("games")!;
      orderedGames = JSON.parse(localStorageGames) as SavedGame[];
    }

    if (type === "newest") {
      orderedGames = savedGames?.toSorted(
        (a, b) => b?.first_release_date - a?.first_release_date
      ) as SavedGame[];
    }

    if (type === "oldest") {
      orderedGames = savedGames?.toSorted(
        (a, b) => a?.first_release_date - b?.first_release_date
      ) as SavedGame[];
    }

    setSavedGames(orderedGames);
  };

  return {
    savedGames,
    removeSavedGame,
    saveGame,
    orderSavedGames,
  };
};

export default useSavedGames;
