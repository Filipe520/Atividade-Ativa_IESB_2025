// Lib do Next
import Link from "next/link";

// Components
import Input from "@components/input";
import ButtonBlue from "@components/buttonBlue";
import ButtonBlack from "@components/buttonBlack";
import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import Image from "next/image";

// Icone
import { MdOutlinePersonOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

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

      <div className="flex flex-col md:flex-row justify-center items-center  w-full h-[80dvh] bg-white ">
        <section className="ml-5 md:flex hidden flex-col items-center justify-evenly gap-5 bg-black/90 text-white w-100 h-150 p-10 rounded-l-2xl shadow-lg ">
          <article>
            {/* Logo */}
            <section className="flex items-center justify-center gap-2 py-5">
              <div>
                <Image
                  src={imgLogo}
                  alt="Imagem da logo do banco"
                  width={80}
                  height={80}
                />
              </div>
              <h1 className="text-3xl">
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
        {/* Formulário de Login */}
        <section className="bg-white text-black mr-5 min-[500px]:border border-black/20 flex flex-col items-center justify-center gap-5 min-[500px]:shadow-lg h-150 p-10 md:rounded-r-2xl max-[767px]:rounded-4xl max-[600px]:ml-16 max-[500px]:rounded-none ">
          <section>
            <h1
              className={`text-4xl text-center font-extrabold mb-5 max-[500px]:pt-10`}
            >
              Bem-Vindo <br></br> de volta!
            </h1>
            <p>Acesse sua conta agora mesmo.</p>
          </section>
          {/* Formulário */}
          <form
            action="#"
            className="flex flex-col gap-5 w-[300px] md:w-[400px] mt-5"
          >
            <Input placeholder="Digite seu melhor e-mail..." type="email" />
            <Input placeholder="Digite sua senha..." type="password" />

            <article className="flex gap-2 justify-between items-center max-md:flex-col">
              <div>
                <input
                  type="checkbox"
                  name="manterConectado"
                  id="manterConectado"
                />
                <label htmlFor="manterConectado" className="pl-2">
                  Manter conectado?
                </label>
              </div>
              <p className="text-right text-sm">
                <Link href="#">
                  <strong className=" text-blue-500 animate-pulse">
                    Esqueci minha senha
                  </strong>
                  .
                </Link>
              </p>
            </article>

            <ButtonBlue
              icone={<MdOutlinePersonOutline />}
              textButton="Entrar"
              router="/login/registrar"
            />
            <ButtonBlack
              icone={<CiLogin />}
              textButton="Inscreva-se"
              router="/login/registrar"
            />
          </form>

          <section className="flex justify-center items-center gap-2 mt-5 w-70">
            <Link href="#">
              <Image src={imgGoogle} alt="Aplicativo Google Play" />
            </Link>
            <Link href="#">
              <Image src={imgMicrosoft} alt="Aplicativo Google Play" />
            </Link>
          </section>
        </section>
      </div>
    </main>
  );
}
