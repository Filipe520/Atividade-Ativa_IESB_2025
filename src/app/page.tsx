"use client";

// styles css
import styles from "./homeLogin.module.css";

// componentes
import Button from "@components/button";
import HeaderMobile from "@components/layout/header/headerMobile";
import HeaderDesktop from "@components/layout/header/headerDesktop";

// Lib Node_modules
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // inpede o envio tradicional do form
    router.push(`/login/registrar?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className={styles.login}>
      {/* <HeaderDesktop /> */}
      <HeaderDesktop />
      {/* <HeaderMobile /> */}
      <HeaderMobile />
      <div className={styles.fundoBlack}>
        <div className={styles.newDiv}>
          {/* Desktop */}
          <div className={styles.inscreve_se}>
            <div className={`${styles.infBanco} md:block hidden`}>
              <h1>BitNext bank</h1>
              <p>
                O <strong>BitNext</strong> é uma instituição financeira
                inovadora que utiliza a tecnologia <strong>blockchain</strong>{" "}
                para oferecer serviços bancários mais seguros e eficientes.
                Através da utilização de <strong>criptomoedas</strong>, como o
                <strong> Bitcoin</strong> e o <strong>Ethereum</strong>, os
                clientes podem realizar transações rápidas e com custos
                reduzidos, além de contar com uma maior transparência e controle
                sobre suas finanças. Com o aumento do interesse por ativos
                digitais, o <strong>Banco BitNext</strong> se destaca ao
                proporcionar uma experiência bancária moderna e adaptada às
                novas necessidades do mercado financeiro global.
              </p>
            </div>
            {/* Mobile */}
            <div className="mb-5 flex flex-col gap-5 md:hidden mt-20">
              <h1>BitNext bank</h1>
              <section>
                <p>
                  O <strong>BitNext</strong> é uma instituição financeira
                  inovadora que utiliza a tecnologia <strong>blockchain</strong>{" "}
                  para oferecer serviços bancários mais seguros e eficientes.
                  Através da utilização de <strong>criptomoedas</strong>, como o
                  <strong> Bitcoin</strong> e o <strong>Ethereum</strong>, os
                  clientes podem realizar transações rápidas e com custos
                  reduzidos
                </p>
              </section>
              <section>
                <p>
                  além de contar com uma maior transparência e controle sobre
                  suas finanças. Com o aumento do interesse por ativos digitais,
                  o <strong>Banco BitNext</strong> se destaca ao proporcionar
                  uma experiência bancária moderna e adaptada às novas
                  necessidades do mercado financeiro global.
                </p>
              </section>
            </div>
            <div className={styles.formLogin}>
              <p className="py-5">
                Crie sua conta e comece a usar o <strong>BitNext</strong> hoje
                mesmo.
              </p>
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
      </div>
    </section>
  );
}
