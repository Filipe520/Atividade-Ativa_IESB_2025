"use client";

// styles css
import styles from "@styles/home.module.css";

// componentes
import FooterLogin from "@components/layout/footerLogin";
import HeaderLogin from "@components/layout/header_login";
import Button from "@components/button";

// Lib Node_modules
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home({ children }: { children?: React.ReactNode }) {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // inpede o envio tradicional do form
    router.push(`/login/formLogin?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className={styles.login}>
      <div className={styles.fundoBlack}>
        <HeaderLogin />
        <div className={styles.newDiv}>
          <div className={styles.inscreve_se}>
            <div className={styles.infBanco}>
              <h1>Banco Cripto</h1>
              <p>
                O <strong>Banco Cripto</strong> é uma instituição financeira
                inovadora que utiliza a tecnologia <strong>blockchain</strong>{" "}
                para oferecer serviços bancários mais seguros e eficientes.
                Através da utilização de <strong>criptomoedas</strong>, como o
                <strong> Bitcoin</strong> e o <strong>Ethereum</strong>, os
                clientes podem realizar transações rápidas e com custos
                reduzidos, além de contar com uma maior transparência e controle
                sobre suas finanças. Com o aumento do interesse por ativos
                digitais, o <strong>Banco Cripto</strong> se destaca ao
                proporcionar uma experiência bancária moderna e adaptada às
                novas necessidades do mercado financeiro global.
              </p>
            </div>
            <div className={styles.formLogin}>
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Endereço de email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" value="Abra uma conta gratuita" />
              </form>
            </div>
          </div>
        </div>
        <FooterLogin />
      </div>
    </section>
  );
}
