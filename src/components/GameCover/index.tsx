import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  id: string;
  imageUrl: string;
  removeSavedGame?: (id: number) => void;
}

const GameCover = ({ id, imageUrl, removeSavedGame }: Props) => {
  return (
    <li id={id} className={styles.li}>
      <Link href={`/game/${id}`}>
        <Image src={imageUrl} alt={id} fill />
      </Link>

      {removeSavedGame && (
        <button
          className={styles.trash}
          onClick={() => removeSavedGame(Number(id))}
        >
          <Image src={"/trash.svg"} alt="Trash" width={16} height={16} />
        </button>
      )}
    </li>
  );
};

export default GameCover;
