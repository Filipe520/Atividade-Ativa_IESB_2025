"use client";

// Lib do Next
import Link from "next/link";

// Components
import Input from "@components/input";
import { ButtonCustom } from "@components/buttonCuston";
import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import Image from "next/image";
import styles from "./login.module.css";
import { backend_Login } from "./logic/backend_Login";

// Icone
import { MdOutlinePersonOutline } from "react-icons/md";

// imgs
import imgLogin from "@public/imagens/login.svg";
import imgLogo from "@public/imagens/logo_sem_fundo.png";
import imgGoogle from "@public/imagens/google_play.png";
import imgMicrosoft from "@public/imagens/AppStore.png";
import { useState } from "react";
import { useRouter } from "next/navigation";

type BackendUser = {
  id?: string;
  userName?: string;
  fullName?: string;
  email?: string;
};

export type BackendResponse = {
  msg?: string;
  token?: string;
  user?: BackendUser;
} | null;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseBackend, setResponseBackend] = useState<BackendResponse>(null);

  const navigate = useRouter();
  const handledSubmitLogin = (event: React.FormEvent) => {
    event.preventDefault();

    backend_Login(email, password, setResponseBackend);

    if (responseBackend?.msg === "Login efetuado com sucesso") {
      navigate.push("/home");
    }
  };

  return (
    <main className="bg-white">
      <HeaderDesktop />
      <HeaderMobile />
      <section className="max-md:ml-15 min-md:mx-5 md:pt-20 md:pb-30 flex flex-col items-center justify-center">
        <div className="flex flex-col md:flex-row justify-center items-center  w-full">
          {/* sessão da Logo */}
          <section className="md:flex hidden flex-col items-center justify-evenly gap-5 bg-sky-950 text-white w-100 h-[684px] p-10 rounded-l-2xl shadow-lg ">
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
          <section className="bg-white text-black min-[500px]:border border-black/20 flex flex-col items-center justify-center gap-5 min-[500px]:shadow-lg max-md:h-[100dvh] max-[500px]:h-[100dvh] max-md:w-full w-[600px] p-5  md:rounded-r-2xl max-[500px]:rounded-none min-lg:w-[900px]">
            <section className="w-full pt-10 md:w-[400px]">
              <h1 className={`text-3xl font-bold mb-5`}>Entre na sua conta</h1>
              <p className="text-black/60 text-sm">
                Acesse sua conta agora mesmo.
              </p>
            </section>
            {/* Formulário */}
            <form
              onSubmit={handledSubmitLogin}
              className="flex flex-col gap-5 w-full  md:w-[400px] mt-5"
            >
              <div className="w-full">
                <Input
                  placeholder="Digite seu melhor e-mail..."
                  type="email"
                  color="bg-black/5 text-black w-full"
                  id="email"
                  onChangeValue={setEmail}
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
                  color="bg-black/5 text-black w-full"
                  id="password"
                  onChangeValue={setPassword}
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
                type="submit"
                router=""
                textButton="Entrar"
                icone={<MdOutlinePersonOutline />}
                color={`border border-transparent hover:border text-white rounded-md hover:border-sky-500 ${styles.bg_Custom} text-white w-full`}
              />
            </form>

            <div className="flex items-center justify-center gap-2 w-full py-5">
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

            <section className="py-5">
              <p className="text-sm text-gray-700">
                Ainda não tem uma conta?{" "}
                <Link href="/login/registrar" className="text-blue-600">
                  Cadastre-se gratuitamente
                </Link>
              </p>
            </section>
          </section>
        </div>
      </section>
    </main>
  );
}
