import Image from "next/image";
import styles from "./styles.module.scss";

const InputSearchGame = () => {
  return (
    <div className={styles.inputContainer}>
      <Image src={"/header/search.svg"} alt="Search" width={16} height={16} priority />

      <input type="text" placeholder="Search games..." />
    </div>
  );
};

export default InputSearchGame;
