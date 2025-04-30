// Lib Icons
import { FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Link from "next/link";

// Styles css
import styles from "./footer_login.module.css";

export default function FooterLogin() {
  return (
    <div className={styles.footer}>
      <ul>
        <li>
          <Link
            href="https://www.facebook.com/FilipeA520/"
            target="_blank"
            rel="external"
          >
            <FaFacebook />
          </Link>
          <Link
            href="https://www.instagram.com/filipealves520/"
            target="_blank"
            rel="external"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://github.com/Filipe520"
            target="_blank"
            rel="external"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://x.com/FilipeAlve89789"
            target="_blank"
            rel="external"
          >
            <FaSquareXTwitter />
          </Link>
        </li>
      </ul>

      <p>
        Copyright &copy; 2025{" "}
        <Link
          href="https://github.com/Filipe520"
          target="_blank"
          rel="external"
        >
          Filipe Alves
        </Link>
      </p>
    </div>
  );
}
