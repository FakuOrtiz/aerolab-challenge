import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"} className={styles.logoContainer}>
      <div>
        <Image src={"/header/swords.svg"} alt="Swords" width={30} height={30} />
      </div>

      <h1>Gaming Haven Z</h1>
    </Link>
  );
};

export default Logo;
