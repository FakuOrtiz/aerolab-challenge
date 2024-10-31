"use client";

import Image from "next/image";
import styles from "./styles.module.scss";
import useSearchGames from "../../hooks/useSearchGames";
import ResultsList from "../ResultsList";
import { useRef, useState } from "react";

const InputSearchGame = () => {
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const { input, updateInput, games, clearInput } = useSearchGames();

  const hasAnyGames = games.length > 0;

  const onPressX = () => {
    if (input) {
      return clearInput();
    }

    setIsFocusedInput(false);
  };

  return (
    <div
      className={styles.inputContainer}
      onFocus={() => setIsFocusedInput(true)}
      onBlur={() => setIsFocusedInput(false)}
    >
      <Image
        src={"/header/search.svg"}
        alt="Search"
        width={16}
        height={16}
        priority
        className={isFocusedInput ? styles.activeSearchImg : ""}
      />

      <input
        type="text"
        placeholder="Search games..."
        ref={inputRef}
        value={input}
        onChange={updateInput}
        className={isFocusedInput && hasAnyGames ? styles.activeInput : ""}
      />

      <button
        className={isFocusedInput ? styles.showX : styles.x}
        onClick={onPressX}
      >
        <Image src={"/x.svg"} alt="X" width={20} height={20} />
      </button>

      {isFocusedInput && hasAnyGames && (
        <ResultsList
          games={games}
          removeInputFocus={() => {
            setIsFocusedInput(false);
            inputRef.current?.blur();
          }}
        />
      )}
    </div>
  );
};

export default InputSearchGame;
