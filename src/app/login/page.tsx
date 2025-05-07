import Image from "next/image";
import Link from "next/link";

// imagens
import appStore from "@public/imagens/AppStore.png";
import googlePlay from "@public/imagens/GooglePlay.png";
import iphone12 from "@public/imagens/iphone-12-mini--black.png";

export default function Login() {
  return (
    <main className="bg-white flex items-center justify-center m-3">
      <article className="container h-dvh flex">
        <section className="bg-amber-200 w-full flex flex-col items-center justify-center">
          <h1 className={`text-6xl font-black pb-10`}>
            O Próximo Passo na Evolução das Criptomoedas
          </h1>
          <p>
            eja bem-vindo à BitNext, onde a inovação encontra a confiança. Com
            uma infraestrutura robusta e ferramentas de última geração, tornamos
            o processo de compra, venda e armazenamento de criptomoedas mais
            fácil e seguro do que nunca. Junte-se a nós e tenha o controle total
            das suas finanças digitais.
          </p>

          <div className="flex py-10">
            <Link href="#" target="_blank" rel="external">
              <Image
                src={appStore}
                alt="imagem do app AppStore"
                width={180}
                height={52}
              ></Image>
            </Link>
            <Link href="#" target="_blank" rel="external">
              <Image
                src={googlePlay}
                alt="imagem do app Google Play"
                width={180}
                height={520}
              ></Image>
            </Link>
          </div>
        </section>

        <section className="bg-blue-200 w-full flex items-center justify-center">
          <Link href="#" target="_blank" rel="external">
            <Image
              src={iphone12}
              alt="imagem do iphone 12"
              width={300}
              height={300}
            ></Image>
          </Link>
        </section>
      </article>
    </main>
  );
}
