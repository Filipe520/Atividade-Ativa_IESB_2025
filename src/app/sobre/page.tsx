// Component: Header Desktop and Header Mobile
import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";

// Component: Card
import CardLeft from "@components/cardLeft";
import CardRight from "@components/cardRight";

export default function Sobre() {
  return (
    <section>
      {/* Header Desktop */}
      <HeaderDesktop />
      {/* Header Mobile */}
      <HeaderMobile />
      <div className="bg-white flex justify-center items-center">
        <main
          className="container max-w-[1300px] px-4 flex flex-col justify-around gap-2
        max-md:ml-14 max-[500px]:ml-14"
        >
          <div className="py-5">
            <h1 className="md:text-5xl text-3xl pl-4  mt-9 border-l-2 border-red-600 inline-block">
              <strong>Sobre o Banco</strong>
            </h1>
          </div>
          {/* Primeiro card */}
          <CardLeft
            alt="imagem de finanças da página sobre"
            src="/imagens/finance-about-01.svg"
            h2="Revolucionando a forma como você se conecta com o dinheiro"
            p_1="Somos mais do que um banco digital. Nascemos com a missão de
                  transformar a maneira como as pessoas lidam com seu dinheiro,
                  usando a força da tecnologia blockchain para criar uma
                  experiência financeira moderna, transparente e sem fronteiras.
                  "
            p_2="Enquanto os bancos tradicionais ainda operam com estruturas
                  antigas e processos lentos, nós apostamos em agilidade,
                  descentralização e liberdade. Com nossa plataforma, você
                  acessa o poder das criptomoedas com a facilidade de um app —
                  simples, direto e sob seu controle."
          />
          {/* Segundo card */}
          <CardRight
            h2="PIX com Cripto: o melhor dos dois mundos"
            p_1="Unimos o sistema de pagamentos mais rápido do Brasil com o
                  universo cripto. Agora você pode enviar e receber valores via
                  PIX usando suas criptomoedas, sem precisar converter
                  manualmente ou lidar com intermediários."
            p_2="Pague boletos, transfira para amigos ou receba pagamentos —
                  tudo com a velocidade do PIX e a segurança da blockchain."
            src="/imagens/finance-about-02.svg"
            alt="imagem de finanças da página sobre"
          />
          {/* Terceiro card  */}
          <CardLeft
            h2="Segurança e controle total"
            p_1="Aqui, você é o dono do seu dinheiro. Utilizamos criptografia
                  de ponta, autenticação avançada e carteiras com proteção
                  multicamadas para garantir que seus ativos estejam sempre
                  seguros."
            p_2="Não exigimos burocracia desnecessária, não bloqueamos seu
                  acesso e não cobramos taxas escondidas. Nosso compromisso é
                  com a sua autonomia."
            src="/imagens/finance-about-03.svg"
            alt="imagem de finanças da página sobre"
          />
        </main>
      </div>
    </section>
  );
}
