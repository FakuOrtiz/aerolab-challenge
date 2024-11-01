"use client";

import styles from "./styles.module.scss";
import EmptySavedGames from "./components/EmptySavedGames";
import FilterList from "./components/FilterList";
import GameCover from "../GameCover";
import useSavedGames from "@/hooks-global/useSavedGames";

const SavedGames = () => {
  const { savedGames, removeSavedGame } = useSavedGames();

  if (!savedGames) return <></>;

  if (!savedGames.length) return <EmptySavedGames />;

  return (
    <section className={styles.container}>
      <FilterList />

      <ul className={styles.ul}>
        {savedGames.map((game) => {
          let imageUrl = "/default-cover.jpg";

          if (game?.cover?.image_id) {
            imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.webp`;
          }

          return (
            <GameCover
              key={game.id}
              id={String(game.id)}
              imageUrl={imageUrl}
              removeSavedGame={removeSavedGame}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default SavedGames;
