import Image from "next/image";

export default function Sobre() {
  return (
    <section className="bg-white flex justify-center items-center">
      <main className="container max-w-[1300px] px-4 flex flex-col justify-around pt-30  gap-2">
        <div className="py-5">
          <h1 className="text-5xl pl-4  my-9 border-l-2 border-red-600 inline-block">
            <strong>Sobre o Banco</strong>
          </h1>
        </div>
        {/* Primeiro card */}
        <article
          className="bg-white bg-center bg-fixed bg-no-repeat bg-cover flex justify-start items-center rounded-3xl my-5 flex-wrap gap-5 w-full"
          style={{ backgroundImage: "url('/imagens/fundoLogin.jpg')" }}
        >
          <div className="bg-white/90 w-full p-5  rounded-2xl flex">
            <section className="w-full">
              <h2 className="text-4xl py-7 text-center">
                <strong>
                  Revolucionando a forma como você se conecta com o dinheiro
                </strong>
              </h2>
              <p className="py-7">
                Somos mais do que um banco digital. Nascemos com a missão de
                transformar a maneira como as pessoas lidam com seu dinheiro,
                usando a força da tecnologia blockchain para criar uma
                experiência financeira moderna, transparente e sem fronteiras.
              </p>
              <p>
                Enquanto os bancos tradicionais ainda operam com estruturas
                antigas e processos lentos, nós apostamos em agilidade,
                descentralização e liberdade. Com nossa plataforma, você acessa
                o poder das criptomoedas com a facilidade de um app — simples,
                direto e sob seu controle.
              </p>
            </section>
            <section className="w-full flex items-center justify-center">
              <div>
                <Image
                  src="/imagens/finance-about-01.svg"
                  alt="imagem de finanças da página sobre"
                  width={300}
                  height={300}
                />
              </div>
            </section>
          </div>
        </article>
        {/* Segundo card */}
        <article
          className="bg-white bg-center bg-fixed bg-no-repeat bg-cover flex justify-start items-center rounded-3xl my-5 flex-wrap gap-5 w-full"
          style={{ backgroundImage: "url('/imagens/fundoCard-01-about.jpg')" }}
        >
          <div className="bg-white/90 w-full p-5 rounded-2xl flex">
            <section className="w-full flex items-center justify-center">
              <div>
                <Image
                  src="/imagens/finance-about-02.svg"
                  alt="imagem de finanças da página sobre"
                  width={300}
                  height={300}
                />
              </div>
            </section>
            <section className="w-full">
              <h2 className="text-4xl py-7 text-center">
                <strong>PIX com Cripto: o melhor dos dois mundos</strong>
              </h2>
              <p className="py-7">
                Unimos o sistema de pagamentos mais rápido do Brasil com o
                universo cripto. Agora você pode enviar e receber valores via
                PIX usando suas criptomoedas, sem precisar converter manualmente
                ou lidar com intermediários.
              </p>
              <p>
                Pague boletos, transfira para amigos ou receba pagamentos — tudo
                com a velocidade do PIX e a segurança da blockchain.
              </p>
            </section>
          </div>
        </article>
        {/* Terceiro card  */}
        <article
          className="bg-white bg-center bg-fixed bg-no-repeat bg-cover flex justify-start items-center rounded-3xl mt-5 mb-20 flex-wrap gap-5 w-full"
          style={{ backgroundImage: "url('/imagens/fundoCard-03-about.jpeg')" }}
        >
          <div className="bg-white/95 w-full p-5 rounded-2xl flex">
            <section className="w-full">
              <h2 className="text-4xl py-7 text-center">
                <strong>Segurança e controle total</strong>
              </h2>
              <p className="py-7">
                Aqui, você é o dono do seu dinheiro. Utilizamos criptografia de
                ponta, autenticação avançada e carteiras com proteção
                multicamadas para garantir que seus ativos estejam sempre
                seguros.
              </p>
              <p>
                Não exigimos burocracia desnecessária, não bloqueamos seu acesso
                e não cobramos taxas escondidas. Nosso compromisso é com a sua
                autonomia.
              </p>
            </section>
            <section className="w-full flex items-center justify-center">
              <div>
                <Image
                  src="/imagens/finance-about-03.svg"
                  alt="imagem de finanças da página sobre"
                  width={300}
                  height={300}
                />
              </div>
            </section>
          </div>
        </article>
      </main>
    </section>
  );
}
