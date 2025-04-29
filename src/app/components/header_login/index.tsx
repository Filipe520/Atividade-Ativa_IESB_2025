import styles from "./style.module.css";
import "../../globals.css";

import Image from "next/image";

export default function HeaderLogin() {
  return (
    <div className={styles.headerLogin}>
      <Image src="/logo01.png" alt="file" width={150} height={50}></Image>

      <nav>
        <ul>
          <li>Criptomoedas</li>
          <li>Preços</li>
          <li>Sobre</li>
        </ul>
      </nav>
    </div>
  );
}
