"use client";

// Lib do Next
import Link from "next/link";
import { useRouter } from "next/navigation";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic-ext"] });

import { MdOutlinePersonOutline } from "react-icons/md";
import { CiLogin } from "react-icons/ci";

export default function HeaderDesktop() {
  const router = useRouter();

  return (
    <header
      className={`
        flex justify-around items-center w-full
         md:bg-white text-black
         ${inter.className}`}
    >
      {/* Desktop */}
      <h1 className="font-extrabold text-2xl hidden md:block p-7">
        <Link href="#">BitNext</Link>
      </h1>

      <nav className="md:flex justify-center gap-2.5 w-lg max-w-[500px] hidden">
        <ul className="text-sm text-gray-800/75 font-bold flex justify-evenly gap-5">
          <li className="cursor-pointer transition-colors hover:text-gray-900">
            <Link href="#">Buy / Sell</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-900">
            <Link href="#">Grow</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-900">
            <Link href="#">Markets</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-900">
            <Link href="#">Business</Link>
          </li>
          <li className="cursor-pointer transition-colors hover:text-gray-900">
            <Link href="#">Support</Link>
          </li>
        </ul>
      </nav>
      <section
        className={`flex items-center max-md:hidden gap-4 text-sm w-[260px]`}
      >
        {/* Botão Sign in */}
        <div className="flex items-center">
          <button
            className={`py-2 px-3 bg-black/70 rounded-md w-full text-white items-center justify-center gap-2 flex`}
            onClick={() => router.push("/login")}
          >
            <MdOutlinePersonOutline />
            <Link href="#" className="hover:text-white/30 text-white">
              Sign in
            </Link>
          </button>
        </div>
        {/* Botão Sign up */}
        <div className="flex items-center">
          <button
            className={` py-2 px-3 bg-blue-600 flex rounded-md w-full gap-2 items-center justify-center text-white`}
            onClick={() => router.push("/login/registrar")}
          >
            <CiLogin className="text-base" />
            <Link href="#" className="hover:text-gray-900 animate-pulse">
              Sign up
            </Link>
          </button>
        </div>
      </section>
    </header>
  );
}
