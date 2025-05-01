import styles from "./header_login.module.css";
import "@styles/globals.css";

// Lib do Next
import Image from "next/image";
import Link from "next/link";

export default function HeaderLogin() {
  return (
    <div className={styles.headerLogin}>
      <Link href="/">
        <Image
          src="/imagens/logo01.png"
          alt="file"
          width={150}
          height={50}
        ></Image>
      </Link>

      <nav>
        <ul>
          <Link href="/sobre">
            <li>Sobre nosso banco</li>
          </Link>
          <Link href="/login/registrar">
            <li>Crie uma conta</li>
          </Link>
          <Link href="/login">
            <li>Login</li>
          </Link>
        </ul>

        <section>
          <h1>área do perfil</h1>
        </section>
      </nav>
    </div>
  );
}
