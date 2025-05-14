"use client";

// fonte
import { Crimson_Text } from "next/font/google";
const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: "600",
});

// componentes
import Button from "@components/button";
import HeaderMobile from "@components/layout/header/headerMobile";
import HeaderDesktop from "@components/layout/header/headerDesktop";
import ButtonBlue from "@components/buttonBlue";
import ButtonBlack from "@components/buttonBlack";

// css
import styles from "./page.module.css";

// icons
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiZap } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";

// Lib Node_modules
import { useRouter } from "next/navigation";
import React, { useState } from "react";

// imagem
import Image from "next/image";
import imgIphone12 from "@public/imagens/iphone-pageHome.png";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // inpede o envio tradicional do form
    router.push(`/login/registrar?email=${encodeURIComponent(email)}`);
  };

  return (
    <section className=" bg-black/90">
      {/* <HeaderDesktop /> */}
      <HeaderDesktop />
      {/* <HeaderMobile /> */}
      <HeaderMobile />

      <main className="max-[500px]:ml-15 flex flex-col justify-center min-[500px]:items-center">
        {/* Home */}
        <section
          className="bg-cover bg-center bg-no-repeat bg-fixed h-dvh w-full flex flex-col justify-center items-center m-auto"
          style={{ backgroundImage: "url(/imagens/logo.png)" }}
        >
          <div className="bg-black/90 h-full w-full mx-auto">
            <section className="p-2 flex flex-col gap-5 max-[500px]:justify-center justify-around max-[600px]:items-center min-[500px]:max-w-[1000px] w-full min-[500px]:h-4/5 min-[500px]:ml-14 m-auto">
              <h1
                className={`text-5xl min-[500px]:text-7xl font-extralight w-full pt-10  ${styles.color_custon}`}
              >
                Do <br /> Tradicional <br /> ao <br /> Digital. <br /> Sem
                Fronteiras.
              </h1>

              <p className="text-gray-500 w-full text-base">
                Usar criptomoedas no dia a dia, ganhar cashback em Bitcoin e
                investir em cripto nunca foi tão fácil.
              </p>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Informe seu e-mail..."
                className="bg-white/10 text-white px-5 py-3 rounded-3xl border border-transparent hover:border-sky-400 max-[500px]:border-sky-500 outline-none transition-all duration-200 w-full min-[500px]:w-[600px]"
              />
              <article className="flex max-[500px]:justify-center gap-10 pb-10 w-full pt-10">
                <ButtonBlue
                  textButton="Login"
                  router="/"
                  icone={<MdOutlinePersonOutline />}
                  color={`${styles.bg_Custon} bg-yellow-300 text-white rounded-md`}
                />
                <ButtonBlack
                  textButton="Registrar"
                  router="/"
                  icone={<CiLogin />}
                  color="text-white rounded-md"
                />
              </article>
            </section>
          </div>
        </section>

        <section className=" bg-white rounded-3xl flex flex-col p-2 py-20 justify-between items-center max-md:ml-15 max-sm:ml-0 min-[500px]:w-full">
          <article>
            <h2 className={` text-black text-4xl text-center  pb-10`}>
              Sua Economia <br></br> Digital Começa Aqui
            </h2>
          </article>

          <article className="w-[300px] py-5">
            <Image
              src={imgIphone12}
              alt="Imagem do Iphone 12"
              width={400}
              height={400}
            />
          </article>

          <article className="max-w-[500px] py-10 mt-5 text-xl border-sky-600 border rounded-xl p-5">
            <div className="flex flex-col  gap-2 justify-center items-center">
              <div>
                <div className="border-sky-500 border rounded-full inline-block p-2">
                  <HiOutlineBellAlert />
                </div>
              </div>
              <div>
                <h2 className="font-semibold py-5">Você Sempre no Controle</h2>
                <p className="text-center text-base">
                  Receba alertas sobre movimentações, acessos e limites da sua
                  conta. Transparência e proteção na palma da mão.
                </p>
              </div>
            </div>
          </article>

          <article className="w-full py-10 flex flex-col justify-center items-center">
            <section className="flex flex-col gap-5">
              <p className="text-blue-900">Mais agilidade no seu banco</p>
              <h2 className="text-4xl">
                Tudo o que você precisa para operar com velocidade e segurança
              </h2>
            </section>

            <section className="flex flex-col gap-5 pt-20">
              <div className="flex gap-2">
                <FiZap className="text-sky-600 w-5 h-5" />
                <h2 className="text-xl text-black/80">
                  <strong>Atendimento instantâneo</strong>
                </h2>
              </div>
              <p>
                Respostas em tempo real para as operações mais críticas. Menos
                espera, mais resultado. Transações processadas em milissegundos
                com alta confiabilidade.
              </p>
            </section>

            <section className="flex flex-col gap-5 pt-20">
              <div className="flex gap-2">
                <GiPadlock className="text-sky-600 w-5 h-5" />
                <h2 className="text-xl text-black/80">
                  <strong>Certificados SSL</strong>
                </h2>
              </div>
              <p>
                Segurança de ponta a ponta Todos os dados trafegam com
                criptografia robusta. Proteção garantida com certificados
                atualizados e monitoramento contínuo.
              </p>
            </section>
          </article>
        </section>
      </main>
    </section>
  );
}
