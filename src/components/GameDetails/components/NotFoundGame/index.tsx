import Link from "next/link";
import styles from "./styles.module.scss";

const NotFoundGame = () => {
  return (
    <div className={styles.container}>
      <h2>No game found {":("}</h2>

      <p>
        Try searching again or <Link href="/">return home</Link>.
      </p>
    </div>
  );
};

export default NotFoundGame;
