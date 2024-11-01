"use client";

import styles from "./styles.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Logo = () => {
  const { id } = useParams<{ id: string }>();

  const router = useRouter();

  return (
    <nav className={styles.navContainer}>
      {id && (
        <button className={styles.backButton} onClick={() => router.back()}>
          <Image
            src={"/left-arrow.svg"}
            alt="Left arrow"
            width={20}
            height={20}
          />
          Back
        </button>
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
