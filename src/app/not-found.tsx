import styles from "./styles.module.scss";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className={styles.notFoundContainer}>
      <h2>404 - Not Found {":("}</h2>

      <p>
        Try searching for a videogame or <Link href="/">return home</Link>.
      </p>
    </div>
  );
};

export default NotFound;
