"use client";

import Image from "next/image";
import { useState } from "react";

import styles from "./styles.module.css";

import Link from "next/link";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";

// Componente
import Input from "@components/input";
import { ButtonCustom } from "@components/buttonCuston";
import { backend_register } from "../logic/backend_Register";

// icon
import { AiOutlineAudit } from "react-icons/ai";

export default function Registrar() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handledSubmit = (e: React.FormEvent) => {
    // Vai previnir o ENVIO do formulário
    e.preventDefault();
    backend_register(userName, fullName, email, password);
  };

  return (
    <div className="flex items-center justify-center flex-col bg-white w-full">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="md:pt-20 md:pb-30">
        <main className="bg-white max-w-5xl flex items-center justify-center text-black md:rounded-xl overflow-hidden shadow-lg w-full min-sm:border border-black/30">
          {/* Lado esquerdo */}
          <section className="hidden md:flex items-center justify-center flex-col px-2  gap-6 bg-white h-[700px]">
            <div className="text-black w-[300px] p-5">
              <h2 className="text-3xl">Abra sua conta</h2>
              <p className="text-[17px] pb-10 text-black/60">
                digital e tenha controle total do seu dinheiro{" "}
                <strong>cripto</strong>.
              </p>
              <p className="text-yellow-700">
                Sua conta <strong>cripto</strong> grátis.
              </p>
            </div>
            <Image
              src="/imagens/finance-register.svg"
              alt="imagem de finança"
              width={300}
              height={300}
            />
          </section>

          {/* Lado direito */}
          <section className="md:border-l border-gray-300/80 px-8 py-10 flex flex-col md:justify-between max-md:justify-center max-md:h-dvh max-[500px]:ml-12 max-md:ml-12 min-md:w-[500px] min-lg:w-[900px]">
            <section>
              <section className="w-full py-10">
                <h1 className={`text-3xl font-bold mb-5`}>Cadastre-se</h1>
                <p className="text-black/60 text-sm">
                  insira suas informações para se registrar
                </p>
              </section>

              <form className="flex flex-col gap-4" onSubmit={handledSubmit}>
                <Input
                  type="text"
                  placeholder="Nome de utilizador"
                  color="bg-black/5 text-black"
                  id="nameUsed"
                  onChangeValue={setUserName}
                />
                <Input
                  type="text"
                  placeholder="Nome completo"
                  color="bg-black/5 text-black"
                  id="fullName"
                  onChangeValue={setFullName}
                />
                <Input
                  id="email"
                  color="bg-black/5 text-black"
                  type="email"
                  placeholder="Informe seu e-mail"
                  onChangeValue={setEmail}
                />
                <Input
                  type="password"
                  placeholder="Palavra-passe"
                  color="bg-black/5 text-black"
                  id="password"
                  onChangeValue={setPassword}
                />
                <ButtonCustom
                  type="submit"
                  router=""
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
              <Link
                href="/login"
                className="text-blue-600 hover:underline text-sm"
              >
                Inicia sessão.
              </Link>
            </section>
          </section>
        </main>
      </div>
    </div>
  );
}
