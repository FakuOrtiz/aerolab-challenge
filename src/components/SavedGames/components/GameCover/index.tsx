import Image from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

const GameCover = () => {
  const image =
    "https://images.igdb.com/igdb/image/upload/t_cover_big/co8bhn.webp";

  return (
    <li className={styles.gameElement}>
      <Link href={"/"}>
        <Image src={image} alt="Game" fill />
      </Link>

      <button className={styles.trash}>
        <Image src={"/trash.svg"} alt="Trash" width={16} height={16} />
      </button>
    </li>
  );
};

export default GameCover;
