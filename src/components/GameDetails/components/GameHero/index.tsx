import Image from "next/image";
import styles from "./styles.module.scss";
import useSavedGames from "@/hooks-global/useSavedGames";
import { GameImage } from "@/models/game.model";

interface Props {
  gameId: number;
  name: string;
  publisher?: string;
  cover?: GameImage;
  release: number;
}

const GameHero = ({ gameId, name, publisher, cover, release }: Props) => {
  const { savedGames, saveGame, removeSavedGame } = useSavedGames();

  let imageUrl = "/default-cover.jpg";

  if (cover?.image_id) {
    imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${cover.image_id}.webp`;
  }

  const isSaved = savedGames?.find((game) => game.id === gameId);

  const onClick = () => {
    if (isSaved) return removeSavedGame(gameId);

    const game = {
      id: gameId,
      name,
      first_release_date: release || -2208988800,
      cover,
    };

    saveGame(game);
  };

  return (
    <div className={styles.container}>
      <article className={styles.detailsContainer}>
        <Image src={imageUrl} alt={name || "Game"} width={170} height={226} />

        <div>
          <h1>{name}</h1>

          <h2>{publisher || "Unknown"}</h2>

          <button
            className={`${styles.collectBtn} ${styles.desktopBtn} ${
              isSaved ? styles.active : ""
            }`}
            onClick={onClick}
          >
            {isSaved && "Game collected"}
            {!isSaved && "Collect game"}
          </button>
        </div>
      </article>

      <button
        className={`${styles.collectBtn} ${styles.mobileBtn} ${
          isSaved ? styles.active : ""
        }`}
        onClick={onClick}
      >
        {isSaved && "Game collected"}
        {!isSaved && "Collect game"}
      </button>
    </div>
  );
};

export default GameHero;
