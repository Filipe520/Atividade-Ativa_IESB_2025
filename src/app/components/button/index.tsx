import styles from "@styles/button.module.css";

import "@styles/globals.css";

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
