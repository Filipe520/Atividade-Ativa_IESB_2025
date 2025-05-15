import Image from "next/image";

import styles from "./styles.module.css";

import Link from "next/link";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";

// Componente
import Input from "@components/input";
import { ButtonCustom } from "@components/buttonCuston";

// icon
import { AiOutlineAudit } from "react-icons/ai";

export default function Registrar() {
  return (
    <div className="flex items-center justify-center flex-col bg-white w-full">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="md:py-30">
        <main className="bg-white max-w-5xl flex items-center justify-center text-black md:rounded-xl overflow-hidden shadow-lg w-full min-sm:border border-black/30">
          {/* Lado esquerdo */}
          <section className="hidden md:flex items-center justify-center flex-col px-2  gap-6 bg-neutral-900 h-[700px]">
            <div className="text-center text-white">
              <h2 className="text-2xl font-bold mb-2">
                Abra sua conta digital e tenha controle total do seu dinheiro
                cripto.
              </h2>
              <p className="text-yellow-200">Abra sua conta cripto grátis.</p>
            </div>
            <Image
              src="/imagens/finance-register.svg"
              alt="imagem de finança"
              width={300}
              height={300}
            />
          </section>

          {/* Lado direito */}
          <section className="md:border-l border-gray-300/80  w-full px-8 py-10 flex flex-col md:justify-between max-md:justify-center max-md:h-dvh max-[500px]:ml-12 max-md:ml-12">
            <section>
              <section className="w-full py-10">
                <h1 className={`text-3xl font-bold mb-5`}>Cadastre-se</h1>
                <p className="text-black/60 text-sm">
                  insira suas informações para se registrar
                </p>
              </section>

              <form className="flex flex-col gap-4">
                <Input
                  id="email"
                  color="bg-black/5 text-black"
                  type="email"
                  placeholder="Número de telefone ou e-mail"
                />
                <Input
                  type="password"
                  placeholder="Palavra-passe"
                  color="bg-black/5 text-black"
                  id="password"
                />
                <Input
                  type="text"
                  placeholder="Nome completo"
                  color="bg-black/5 text-black"
                  id="fullName"
                />
                <Input
                  type="text"
                  placeholder="Nome de utilizador"
                  color="bg-black/5 text-black"
                  id="nameUsed"
                />
                <ButtonCustom
                  router="/login"
                  textButton="Registar"
                  icone={<AiOutlineAudit />}
                  color={`${styles.bg_Custon} text-white rounded-xl border border-transparent hover:border-blue-500`}
                />
              </form>

              <p className="text-xs text-gray-600 mt-4">
                Com este registo, aceitas os nossos <strong>Termos</strong> e a{" "}
                <strong>Política de Privacidade</strong>.
              </p>
            </section>

            <section className="text-center mt-8">
              <p className="text-sm">Já possui conta?</p>
              <a href="#" className="text-blue-600 hover:underline text-sm">
                <Link href="/login">Inicia sessão.</Link>
              </a>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}
