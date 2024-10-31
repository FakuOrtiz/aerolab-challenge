"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import useSearchGames from "../../hooks/useSearchGames";
import ResultsList from "../ResultsList";
import { useState } from "react";

const InputSearchGame = () => {
  const [isWriting, setIsWriting] = useState(false);

  const { input, updateInput, games, clearInput } = useSearchGames();

  return (
    <div
      className={styles.inputContainer}
      onFocus={() => setIsWriting(true)}
      onBlur={() => setIsWriting(false)}
    >
      <Image
        src={"/header/search.svg"}
        alt="Search"
        width={16}
        height={16}
        priority
        className={isWriting ? styles.activeSearchImg : ""}
      />

      <input
        type="text"
        placeholder="Search games..."
        value={input}
        onChange={updateInput}
        className={isWriting && games.length > 0 ? styles.activeInput : ""}
      />

      <button
        className={isWriting ? styles.showX : styles.x}
        onClick={clearInput}
      >
        <Image src={"/x.svg"} alt="X" width={20} height={20} />
      </button>

      {isWriting && games.length > 0 && <ResultsList games={games} />}
    </div>
  );
};

export default InputSearchGame;
