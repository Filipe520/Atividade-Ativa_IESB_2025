import Image from "next/image";
import "@styles/variables.css";

import Link from "next/link";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";

import Input from "@components/input";

export default function Registrar() {
  return (
    <div className="flex items-center justify-center flex-col bg-white w-full">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="md:py-30">
        <main className="bg-white max-w-5xl flex items-center justify-center text-black md:rounded-xl overflow-hidden shadow-lg w-full min-sm:border border-black/30">
          {/* Lado esquerdo */}
          <section className="h-[600px] md:w-full hidden md:flex items-center justify-center flex-col px-6 py-10 gap-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                Abra sua conta digital e tenha controle total do seu dinheiro
                cripto.
              </h2>
              <p className="text-gray-700">Abra sua conta cripto grátis.</p>
            </div>
            <Image
              src="/imagens/finance-register.svg"
              alt="imagem de finança"
              width={300}
              height={300}
            />
          </section>

          {/* Lado direito */}
          <section className="md:border-l border-gray-300/80 md:h-[600px] w-full px-8 py-10 flex flex-col md:justify-between max-md:justify-center max-md:h-dvh max-[500px]:ml-12 min-[500px]:ml-12">
            <section>
              <h2 className="text-3xl text-center font-bold mb-6">
                Cadastre-se no <br /> Banco BitNext
              </h2>

              <form className="flex flex-col gap-4">
                <Input
                  type="email"
                  placeholder="Número de telefone ou e-mail"
                />
                <Input type="password" placeholder="Palavra-passe" />
                <Input type="text" placeholder="Nome completo" />
                <Input type="text" placeholder="Nome de utilizador" />

                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 rounded-md mt-4 hover:bg-blue-700"
                >
                  Registar
                </button>
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
