import styles from "./styles.module.css";
import "@stylesGlobals.globals.css";

type ButtonProps = {
  type: "button" | "submit" | "reset";
  value: string;
};

export default function Button({ type, value }: ButtonProps) {
  return (
    <button className={styles.buttonComponente} type={type}>
      {value}
    </button>
  );
}
