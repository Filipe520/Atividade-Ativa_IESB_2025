// styles css
import styles from "../../stylesLogin.module.css";

// componentes
import FooterLogin from "../../components/footerLogin";
import HeaderLogin from "../../components/header_login";
import Button from "../../components/layout/button/index";

// Instead of this:
import React from "react";

export default function LoginScreen({
  children,
}: {
  children?: React.ReactNode;
}) {
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
              <form action="/search">
                <input type="text" placeholder="Endereço de email" />
                <Button type="submit" name="Abra uma conta gratuita" />
              </form>
            </div>
          </div>
        </div>
        <FooterLogin />
      </div>
    </section>
  );
}
