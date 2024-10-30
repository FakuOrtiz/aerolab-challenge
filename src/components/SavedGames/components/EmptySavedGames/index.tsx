import styles from "./styles.module.scss";
import Image from "next/image";

const EmptySavedGames = () => {
  return (
    <article className={styles.container}>
      <Image src={"/empty.svg"} alt="No saved games" width={170} height={360} />

      <strong>Nothing collected yet</strong>

      <p>Here you will see your collected games</p>
    </article>
  );
};

export default EmptySavedGames;
