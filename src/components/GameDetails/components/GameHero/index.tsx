import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  name: string;
  publisher: string;
  coverId?: string;
}

const GameHero = ({ name, publisher, coverId }: Props) => {
  let imageUrl = "/default-cover.jpg";

  if (coverId) {
    imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${coverId}.webp`;
  }

  return (
    <div className={styles.container}>
      <article className={styles.detailsContainer}>
        <Image src={imageUrl} alt={name || "Game"} width={170} height={226} />

        <div>
          <h1>{name}</h1>

          <h2>{publisher}</h2>

          <button className={`${styles.collectBtn} ${styles.desktopBtn}`}>
            Collect game
          </button>
        </div>
      </article>

      <button className={`${styles.collectBtn} ${styles.mobileBtn}`}>
        Collect game
      </button>
    </div>
  );
};

export default GameHero;
