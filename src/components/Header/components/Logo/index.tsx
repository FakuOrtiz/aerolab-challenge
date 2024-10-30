"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

const Logo = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <nav className={styles.navContainer}>
      {id && (
        <Link href={"/"} className={styles.backContainer}>
          <button className={styles.backButton}>
            <Image
              src={"/left-arrow.svg"}
              alt="Left arrow"
              width={20}
              height={20}
            />
            Back
          </button>
        </Link>
      )}

      {!id && (
        <Link href={"/"} className={styles.titleContainer}>
          <div>
            <Image
              src={"/header/swords.svg"}
              alt="Swords"
              width={30}
              height={30}
            />
          </div>

          <h1>Gaming Haven Z</h1>
        </Link>
      )}
    </nav>
  );
};

export default Logo;
