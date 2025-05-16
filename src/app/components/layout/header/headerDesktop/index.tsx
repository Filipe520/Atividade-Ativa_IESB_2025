"use client";

// Styles
import styles from "./styles.module.css";

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
import { ButtonCustom } from "@components/buttonCuston";

export default function HeaderDesktop() {
  return (
    <header
      className={`
        flex justify-around items-center w-full
         md:bg-black/90 text-white md:pt-5 min-md:pb-5
         ${inter.className} md:h-[120px]`}
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
        <h1 className="font-extrabold text-2xl hidden md:block">
          <Link href="/">BitNext</Link>
        </h1>
      </div>

      <nav className="md:flex justify-center gap-2.5 w-lg  hidden">
        <HeaderDesktopLinks />
      </nav>
      <section
        className={`flex items-center max-md:hidden gap-5 text-sm  w-70`}
      >
        {/* Botão Entrar */}
        <ButtonCustom
          textButton="Entrar"
          router="/login"
          icone={<MdOutlinePersonOutline />}
          color={`border border-transparent hover:border text-white rounded-md hover:border-sky-500 ${styles.bg_Custon}`}
        />
        <ButtonCustom
          textButton="Inscreva-se"
          router="/login/registrar"
          icone={<CiLogin />}
          color={`text-white rounded-md border border-transparent hover:border-white bg-black`}
        />
      </section>
    </header>
  );
}
