// componentes
import HeaderMobile from "@components/layout/header/headerMobile";
import HeaderDesktop from "@components/layout/header/headerDesktop";
import { ButtonCustom } from "@components/buttonCuston";
import InfoBlock from "@components/infoBlock";
import Input from "@components/input";

// css
import styles from "./page.module.css";

// icons
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { FiZap } from "react-icons/fi";
import { GiPadlock } from "react-icons/gi";

// imagem
import Image from "next/image";
import imgIphone12 from "@public/imagens/iphone-pageHome.png";

export default function Home() {
  return (
    <section className=" bg-black/90">
      {/* <HeaderDesktop /> */}
      <HeaderDesktop />
      {/* <HeaderMobile /> */}
      <HeaderMobile />

      <main className="flex flex-col justify-center min-[500px]:items-center">
        {/* Home */}
        <section
          className="h-dvh w-full flex flex-col justify-center items-center m-auto bg-no-repeat bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url(/imagens/logo.png)" }}
        >
          <div className="mx-auto flex  h-dvh w-full  bg-black/90">
            <section className="p-2 flex flex-col gap-5 max-[500px]:justify-center justify-around max-[600px]:items-center min-[500px]:max-w-[1000px] w-full min-[500px]:h-4/5 min-[500px]:ml-14 m-auto">
              <article className="flex flex-col gap-10">
                <h1
                  className={`text-5xl min-[400px]:text-7xl font-extralight w-full pt-10  ${styles.color_custon}`}
                >
                  Do <br /> Tradicional <br /> ao <br /> Digital. <br /> Sem
                  Fronteiras.
                </h1>

                <p className="text-gray-500 w-full text-base">
                  Usar criptomoedas no dia a dia, ganhar cashback em Bitcoin e
                  investir em cripto nunca foi tão fácil.
                </p>
                <div>
                  <Input
                    placeholder="Informe seu e-mail..."
                    type="text"
                    color="bg-white/10 text-white min-[500px]:w-[400px] md:w-600px"
                    id="email"
                  />
                </div>
              </article>

              <article className="flex max-[500px]:justify-center gap-10 pb-20 w-full min-[500px]:pt-10">
                <ButtonCustom
                  textButton="Login"
                  router="/login"
                  icone={<MdOutlinePersonOutline />}
                  color={`${styles.bg_Custon} border border-transparent hover:border text-white rounded-md hover:border-sky-500 min-md:w-[200px]`}
                />
                <ButtonCustom
                  textButton="Inscreva-se"
                  router="/login/registrar"
                  icone={<CiLogin />}
                  color={`text-white rounded-md border border-transparent hover:border-white min-md:w-[200px]`}
                />
              </article>
            </section>
          </div>
        </section>
        <div className="w-full">
          <section className="bg-white rounded-3xl flex flex-col p-5 py-20 justify-between items-center max-md:ml-15">
            <div className="flex flex-col justify-center items-center w-full">
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
                    <h2 className="font-semibold py-5">
                      Você Sempre no Controle
                    </h2>
                    <p className="text-center text-base">
                      Receba alertas sobre movimentações, acessos e limites da
                      sua conta. Transparência e proteção na palma da mão.
                    </p>
                  </div>
                </div>
              </article>

              <article className="w-full py-10 flex flex-col justify-center items-center">
                <section className="flex flex-col gap-5">
                  <p className="text-blue-900">Mais agilidade no seu banco</p>
                  <h2 className="text-4xl">
                    Tudo o que você precisa para operar com velocidade e
                    segurança
                  </h2>
                </section>

                <InfoBlock
                  icon={<FiZap className="text-sky-600 w-5 h-5" />}
                  titulo="Atendimento instantâneo"
                  paragrafo="Respostas em tempo real para as operações mais críticas. Menos
                      espera, mais resultado. Transações processadas em milissegundos
                      com alta confiabilidade."
                />

                <InfoBlock
                  icon={<GiPadlock className="text-sky-600 w-5 h-5" />}
                  titulo="Certificados SSL"
                  paragrafo="Segurança de ponta a ponta Todos os dados trafegam com
                      criptografia robusta. Proteção garantida com certificados
                      atualizados e monitoramento contínuo."
                />
              </article>
            </div>
          </section>
        </div>
      </main>
    </section>
  );
}
