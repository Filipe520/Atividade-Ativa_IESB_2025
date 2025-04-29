import styles from "./styles.module.css";
import "../../../globals.css";
type ButtonProps = {
  type: "button" | "submit" | "reset";
  name: string;
};

export default function Button({ type, name }: ButtonProps) {
  return (
    <button className={styles.buttonComponente} type={type}>
      {name}
    </button>
  );
}
