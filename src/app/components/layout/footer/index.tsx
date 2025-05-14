// Lib Icons
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLink } from "react-icons/fa6";

import Link from "next/link";

// Styles css
import styles from "./footer_login.module.css";

export default function FooterLogin() {
  return (
    <footer
      className={`hover:text-zinc-200 text-gray-400 transition-colors ${styles.footer}`}
    >
      <section className={styles.boxFilhoFooter}>
        <div className={`text-center text-xs ${styles.boxFilho2}`}>
          <section className={`flex gap-4 justify-center mb-2`}>
            <ul className={`flex gap-4 w-xs justify-around`}>
              <li className="hover:underline cursor-pointer">
                Política de privacidade
              </li>
              <li className="hover:underline cursor-pointer">Termos de uso</li>
            </ul>
          </section>
          <p className="pt-5">
            <strong>Banco BitNEXT</strong>, Inc. ou suas afiliadas. Todos os
            direitos reservados.
          </p>
        </div>
        <div className={styles.footerFilho}>
          <ul className="flex items-center justify-around w-full py-7">
            <li>
              <Link
                href="https://www.facebook.com/FilipeA520/"
                target="_blank"
                rel="external"
              >
                <FaFacebook />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/filipealves520/"
                target="_blank"
                rel="external"
              >
                <FaInstagram />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/Filipe520"
                target="_blank"
                rel="external"
              >
                <FaGithub />
              </Link>
            </li>
            <li>
              <Link
                href="https://x.com/FilipeAlve89789"
                target="_blank"
                rel="external"
              >
                <FaSquareXTwitter />
              </Link>
            </li>
          </ul>

          <p className="text-gray-400 text-center">Copyright &copy; 2025</p>

          <div className="flex gap-2 text-white/80 mt-2">
            <Link
              href="https://github.com/Filipe520"
              target="_blank"
              rel="external"
              className={styles.copy2025}
            >
              <FaLink />
            </Link>

            <p>
              <Link
                href="https://github.com/Filipe520"
                target="_blank"
                rel="external"
                className={styles.copy2025}
              >
                Filipe Alves
              </Link>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
