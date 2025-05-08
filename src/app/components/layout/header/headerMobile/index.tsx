"use client";

// React Icons
import { FaHome } from "react-icons/fa";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { GoGear } from "react-icons/go";
import { IoHelpCircleOutline } from "react-icons/io5";
import { LuBox } from "react-icons/lu";
import { TbAdjustmentsDollar } from "react-icons/tb";
import { CiMenuKebab } from "react-icons/ci";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePersonOutline } from "react-icons/md";

// Lib do Next/React
import { useState } from "react";
import Link from "next/link";

// Font
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["cyrillic-ext"] });

import FormSearch from "@components/formSearch";

// Image da logo
import Image from "next/image";
import imgLogo from "@public/imagens/logo_sem_fundo.png";

export default function HeaderMobile() {
  const [handledMenu, setHandledMenu] = useState(false);
  return (
    <>
      {/*NavBar Mobile */}
      <section
        className={`${inter} w-screen md:hidden flex justify-around md:bg-white`}
      >
        {/* Menu aberto ?*/}
        <nav
          className={`${
            handledMenu ? "opacity-100 w-75 h-dvh" : "w-15 h-screen"
          }
          md:hidden flex flex-col bg-white left-0 top-0 rounded-sm transition-all fixed`}
        >
          {/* Humburguer */}
          <div
            onClick={() => setHandledMenu(!handledMenu)}
            className={`cursor-pointer md:hidden flex-col gap-1 flex absolute top-4 z-10 bg-gray-100 p-3 rounded-sm ml-2`}
          >
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
            <span className="w-5 h-0.5 bg-gray-700 block"></span>
          </div>

          <div
            className={`flex flex-col justify-around gap-5 h-full text-lg relative ${
              handledMenu ? "pl-5" : "items-center"
            }`}
          >
            {/* Icones Mobile */}
            <section className="flex flex-col gap-7 text-base mt-10">
              {/* Imagens logo */}
              <div className="flex items-center gap-4">
                <Link href="/">
                  <Image
                    src={imgLogo}
                    alt="Imagem da logo do banco"
                    width={35}
                    height={35}
                    style={{ maxWidth: "50px" }}
                  ></Image>
                </Link>
                <h1
                  className={`${
                    handledMenu ? "block" : "hidden"
                  } font-extrabold text-2xl`}
                >
                  <Link href="/">BitNext</Link>
                </h1>
              </div>
              {/* Formulário de busca */}
              <FormSearch
                placeholder="Search..."
                handledMenu={handledMenu}
                widthInput="w-65"
              />
            </section>

            <section
              className={`flex flex-col gap-4 text-sm ${
                handledMenu ? "w-[260px]" : "items-center"
              }`}
            >
              {/* Botão Sign in */}
              <div className="flex items-center">
                <Link href="/login">
                  <MdOutlinePersonOutline
                    className={`text-lg ${
                      handledMenu ? "hidden" : "block"
                    } cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease`}
                  />
                </Link>
                <button
                  className={`${
                    handledMenu ? "flex" : "hidden"
                  } py-2 px-3 bg-black/70 rounded-md w-full text-white items-center justify-center gap-2`}
                >
                  <MdOutlinePersonOutline />
                  <Link
                    href="/login"
                    className="hover:text-white/30 text-white"
                  >
                    Sign in
                  </Link>
                </button>
              </div>
              {/* Botão Sign up */}
              <div className="flex items-center mt-5">
                <Link href="/login/registrar">
                  <CiLogin
                    className={`text-xl" ${
                      handledMenu ? "hidden" : "block"
                    } cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease`}
                  />
                </Link>
                <button
                  className={`${
                    handledMenu ? "flex" : "hidden"
                  } py-2 px-3 bg-blue-600 rounded-md w-full gap-2 items-center justify-center text-white`}
                >
                  <CiLogin className="text-xl" />
                  <Link
                    href="/login/registrar"
                    className="hover:text-gray-900 animate-pulse"
                  >
                    Sign up
                  </Link>
                </button>
              </div>
            </section>

            <section>
              <ul className="flex flex-col gap-5 text-base">
                {/* Icone Home */}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <FaHome className="text-lg" />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    <Link href="/">Home</Link>
                  </li>
                </div>
                {/* Icone Dashboard */}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <LuBox />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    Dashboard
                  </li>
                </div>
                {/* Icone Ativos Financeiros*/}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <TbAdjustmentsDollar className="text-xl" />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    Financial Assets
                  </li>
                </div>
              </ul>
            </section>

            <section
              className={`${
                handledMenu ? "w-[188px]" : ""
              } flex flex-col gap-7`}
            >
              <ul className="flex flex-col gap-5 text-base">
                {/* Icone Notificações */}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <HiOutlineBellAlert className="text-lg" />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    Notifications
                  </li>
                </div>
                {/* Icone Suporte */}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <IoHelpCircleOutline className="text-lg" />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    Suport
                  </li>
                </div>
                {/* Icone Suporte */}
                <div className="flex items-center cursor-pointer  hover:text-blue-500 text-shadow-lg transition-colors ease relative">
                  <GoGear className="text-lg" />
                  <li className={`${handledMenu ? "flex" : "hidden"}  ml-3`}>
                    Settings
                  </li>
                </div>
              </ul>
            </section>

            <section
              className={`${
                handledMenu ? "w-[188px]" : "bg-transparent"
              } flex flex-col gap-7 w-[270px] pl-2 bg-black/70 text-white p-2 rounded-xl`}
            >
              <div className="flex items-center justify-around w-full gap-3 text-base">
                <Link href="#">
                  <div className="bg-black/80 rounded-full h-10 w-10 relative flex items-center">
                    <span className="bg-green-300 rounded-full h-3 w-3 z-20 absolute bottom-7 left-7"></span>
                  </div>
                </Link>
                <div className={`${handledMenu ? "flex" : "hidden"} flex-col`}>
                  <h2>User Name</h2>
                  <p className="text-white/50">name@gmail.com</p>
                </div>
                <div className={`${handledMenu ? "block" : "hidden"}`}>
                  <Link href="#">
                    <CiMenuKebab />
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </nav>
      </section>
    </>
  );
}
