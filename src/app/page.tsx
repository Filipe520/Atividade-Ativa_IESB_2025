import styles from "./stylesLogin.module.css";

import FooterLogin from "./components/footerLogin";

// Instead of this:

import Form from "next/form";

export default function LoginScreen() {
  return (
    <section className={styles.login}>
      <div className={styles.fundoBlack}>
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
              <Form action="/search">
                <input type="text" placeholder="Endereço de email" />
                <button type="submit">Inscrever-se</button>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <FooterLogin></FooterLogin>
    </section>
  );
}
