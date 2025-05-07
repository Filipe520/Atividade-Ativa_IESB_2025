"use client";

// Lib do Next
import Link from "next/link";
import Image from "next/image";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic-ext"] });

import { MdOutlinePersonOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

// Componentes
import HeaderDesktopLinks from "./links";
import ButtonBlack from "@components/buttonBlack";
import ButtonBlue from "@components/buttonBlue";

export default function HeaderDesktop() {
  return (
    <header
      className={`
        flex justify-around items-center w-full
         md:bg-white text-black md:pt-5
         ${inter.className}`}
    >
      {/* Desktop */}
      <div className="md:flex hidden items-center pl-5 pt-1">
        <Link href="/" className="w-[50px] h-[50px]">
          <Image
            src="/imagens/logo_sem_fundo.png"
            alt="Logo BitNext"
            width={40}
            height={40}
          />
        </Link>
        <h1 className="font-extrabold text-2xl hidden md:block pr-3 pl-1">
          <Link href="/">BitNext</Link>
        </h1>
      </div>

      <nav className="md:flex justify-center gap-2.5 w-lg max-w-[500px] hidden">
        <HeaderDesktopLinks />
      </nav>
      <section
        className={`flex items-center max-md:hidden gap-4 text-sm w-[260px]`}
      >
        {/* Botão Entrar */}
        <ButtonBlack
          textButton="Entrar"
          router="/login"
          icone={<MdOutlinePersonOutline />}
        />
        {/* Botão Sign up */}
        <ButtonBlue
          router="/login/registrar"
          textButton="Inscrever-se"
          icone={<CiLogin className="text-base" />}
        />
      </section>
    </header>
  );
}
