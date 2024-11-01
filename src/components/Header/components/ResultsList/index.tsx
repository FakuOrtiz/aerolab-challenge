import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ResultGame } from "@/models/game.model";
import { ReactMouseEvent } from "@/constants/customTypes";

interface Props {
  games: ResultGame[];
  removeInputFocus: () => void;
}

const ResultsList = ({ games, removeInputFocus }: Props) => {
  const onMouseDown = (e: ReactMouseEvent) => {
    e.preventDefault();

    setTimeout(() => {
      removeInputFocus();
    }, 100);
  };

  return (
    <ul className={styles.container}>
      {games?.map((game) => {
        let imageUrl = "/default-cover.jpg";

        if (game?.cover?.image_id) {
          imageUrl = `https://images.igdb.com/igdb/image/upload/t_cover_big/${game?.cover?.image_id}.webp`;
        }

        return (
          <li key={game.id}>
            <Link href={`/game/${game.id}`} onMouseDown={onMouseDown}>
              <Image src={imageUrl} alt={game.name} width={30} height={30} />
              {game.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ResultsList;
