import Image from "next/image";
import styles from "./styles.module.scss";

interface Props {
  type: "success" | "error";
  title: string;
  message: string;
}

const CustomToast = ({ type, title, message }: Props) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.titleContainer}>
        <Image src={`/toast/${type}.svg`} alt={type} width={16} height={16} />

        <h4>{title}</h4>
      </div>

      <p>{message}</p>
    </div>
  );
};

export default CustomToast;
