// Lib do Next
import Link from "next/link";

// Components
import Input from "@components/input";
import { ButtonCustom } from "@components/buttonCuston";
import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import Image from "next/image";

// Icone
import { MdOutlinePersonOutline } from "react-icons/md";

// imgs
import imgLogin from "@public/imagens/login.svg";
import imgLogo from "@public/imagens/logo_sem_fundo.png";
import imgGoogle from "@public/imagens/google_play.png";
import imgMicrosoft from "@public/imagens/appStore.png";

export default function Login() {
  return (
    <main className={` bg-black/70`}>
      <HeaderDesktop />
      <HeaderMobile />
      <section className="ml-15 md:py-40 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center  w-full">
          {/* sessão da Logo */}
          <section className="ml-5 md:flex hidden flex-col items-center justify-evenly gap-5 bg-blue-950 text-white w-100 h-150 p-10 rounded-l-2xl shadow-lg ">
            <article>
              <section className="flex items-center justify-center gap-2 py-5">
                <div>
                  <Image
                    src={imgLogo}
                    alt="Imagem da logo do banco"
                    width={80}
                    height={80}
                  />
                </div>
                <h1 className="text-3xl text-gray-600">
                  <strong>BitNext Bank</strong>
                </h1>
              </section>
            </article>
            <Image
              src={imgLogin}
              alt="desenho de uma imagem de login"
              width={300}
              height={300}
            />
          </section>
          {/* Sessão do Formulário de Login */}
          <section className="bg-white text-black min-[500px]:border border-black/20 flex flex-col items-center justify-center gap-5 min-[500px]:shadow-lg max-md:h-[100dvh] max-[500px]:h-[100dvh] max-md:w-full p-5  md:rounded-r-2xl max-[500px]:rounded-none">
            <section className="w-full pt-10">
              <h1 className={`text-3xl font-bold mb-5`}>Entre na sua conta</h1>
              <p className="text-black/60 text-sm">
                Acesse sua conta agora mesmo.
              </p>
            </section>
            {/* Formulário */}
            <form
              action="#"
              className="flex flex-col gap-5 w-full  md:w-[400px] mt-5"
            >
              <div className="w-full">
                <Input
                  placeholder="Digite seu melhor e-mail..."
                  type="email"
                  color="bg-black/5 text-black"
                  id="email"
                />
              </div>
              <p className="text-right text-xs">
                <Link href="#">
                  <strong className=" text-blue-500 animate-pulse">
                    Esqueci minha senha
                  </strong>
                  .
                </Link>
              </p>
              <div>
                <Input
                  placeholder="Digite sua senha..."
                  type="password"
                  color="bg-black/5 text-black"
                  id="password"
                />
              </div>

              <article className="flex gap-2 justify-between max-md:flex-col">
                <div>
                  <input
                    type="checkbox"
                    name="manterConectado"
                    id="manterConectado"
                    className="cursor-pointer"
                  />
                  <label
                    htmlFor="manterConectado"
                    className="pl-2 cursor-pointer"
                  >
                    Manter conectado?
                  </label>
                </div>
              </article>
              <ButtonCustom
                textButton="Entrar"
                router="/home"
                icone={<MdOutlinePersonOutline />}
                color={`border border-transparent hover:border text-white rounded-md hover:border-sky-500 bg-sky-500 text-white w-full`}
              />
            </form>

            <div className="flex items-center justify-between gap-2 w-full py-5">
              <div className="h-[.2px] w-[50px] bg-black/20"></div>
              <p className="text-center">Ou acesse Nosso app</p>
              <div className="h-[.2px] w-[50px] bg-black/20"></div>
            </div>

            <section className="flex justify-center items-center gap-2 w-70">
              <Link href="#">
                <Image src={imgGoogle} alt="Aplicativo Google Play" />
              </Link>
              <Link href="#">
                <Image src={imgMicrosoft} alt="Aplicativo Google Play" />
              </Link>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
