import styles from "./styles.module.scss";
import InputSearchGame from "./components/InputSearchGame";
import Logo from "./components/Logo";

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <InputSearchGame />
    </header>
  );
};

export default Header;
