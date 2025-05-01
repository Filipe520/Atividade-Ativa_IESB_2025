import "@styles/globals.css";

// Lib do Next
import Image from "next/image";
import Link from "next/link";

// Lib de icones
import { HiOutlineUser } from "react-icons/hi2";

export default function HeaderLogin() {
  return (
    <div className="flex justify-evenly items-center p-2.5 fixed left-0 top-0 w-full bg-black/90 text-white">
      <Link href="/">
        <Image
          src="/imagens/logo01.png"
          alt="file"
          width={150}
          height={50}
        ></Image>
      </Link>

      <nav className="flex justify-center gap-2.5 w-lg">
        <ul className="text-[15px] flex justify-evenly gap-5">
          <li className="cursor-pointer transition-colors hover:text-amber-300">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-amber-300">
            <Link href="/sobre">Sobre nosso banco</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-amber-300">
            <Link href="/login/registrar">Crie uma conta</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-amber-300">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <section className="text-2xl cursor-pointer transition-colors hover:text-amber-300">
        <HiOutlineUser />
      </section>
    </div>
  );
}
