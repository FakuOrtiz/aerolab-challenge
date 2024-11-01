import GameCover from "@/components/GameCover";
import styles from "./styles.module.scss";
import { SimilarGame } from "@/models/game.model";

interface Props {
  similarGames: SimilarGame[];
}

const SimilarGames = ({ similarGames }: Props) => {
  return (
    <div className={styles.container}>
      <h2>Similar games</h2>

      <ul className={styles.ul}>
        {similarGames.map((game) => {
          let imageUrl = "/default-cover.jpg";

          if (game.cover.image_id) {
            imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover.image_id}.webp`;
          }

          return (
            <GameCover key={game.id} id={String(game.id)} imageUrl={imageUrl} />
          );
        })}
      </ul>
    </div>
  );
};

export default SimilarGames;
