// Lib do Next
import Link from "next/link";
import Image from "next/image";

import { MdOutlinePersonOutline } from "react-icons/md";

// Componentes
import HeaderDesktopLinks from "./links";
import { ButtonCustom } from "@components/buttonCuston";

type Prop = {
  styles?: string;
};

export default function HeaderDesktop({ styles = "text-black/75" }: Prop) {
  return (
    // Father
    <header
      className={`
        flex justify-around items-center w-full
          ${styles} md:pt-5 min-md:pb-5
          md:h-[120px]`}
    >
      {/* Logo */}
      <div className="md:flex hidden items-center pt-1 flex-initial">
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

      {/* Links */}
      <nav className="md:flex justify-center gap-2.5  hidden flex-initial">
        <HeaderDesktopLinks styles={styles} />
      </nav>

      {/* Login */}
      <section
        className={`flex justify-end max-md:hidden gap-5 text-sm flex-initial`}
      >
        {/* Botão Entrar */}
        <ButtonCustom
          textButton="Entrar"
          router="/login"
          icone={<MdOutlinePersonOutline />}
          color={`border  hover:border ${styles} rounded-md hover:border-sky-500 active:text-sky-500`}
        />
      </section>
    </header>
  );
}
