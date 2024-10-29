import styles from "./styles.module.scss";
import Image from "next/image";

const Header = () => {
  return (
    <header className={styles.header}>
      <article className={styles.logoContainer}>
        <div>
          <Image
            src={"/header/swords.svg"}
            alt="Swords"
            width={30}
            height={30}
          />
        </div>

        <h1>Gaming Haven Z</h1>
      </article>

      <div className={styles.inputContainer}>
        <Image src={"/header/search.svg"} alt="Search" width={16} height={16} />

        <input type="text" placeholder="Search games..." />
      </div>
    </header>
  );
};

export default Header;
