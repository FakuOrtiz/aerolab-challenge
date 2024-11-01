import Link from "next/link";
import styles from "./styles.module.scss";
import Image from "next/image";

interface Props {
  id: string;
  imageUrl: string;
  showTrash?: true;
}

const GameCover = ({ id, imageUrl, showTrash }: Props) => {
  return (
    <li id={id} className={styles.li}>
      <Link href={`/${id}`}>
        <Image src={imageUrl} alt={id} fill />
      </Link>

      {showTrash && (
        <button className={styles.trash}>
          <Image src={"/trash.svg"} alt="Trash" width={16} height={16} />
        </button>
      )}
    </li>
  );
};

export default GameCover;
