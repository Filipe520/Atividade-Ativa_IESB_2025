"use cliente";

import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

export default function NotFound() {
  return (
    <article className="flex max-md:flex-col justify-center items-center mx-auto  bg-white min-[500px]:h-[900px] h-dvh min-sm:py-5">
      <section className="bg-white p-10 md:rounded-l-3xl  max-md:rounded-3xl flex flex-col md:w-xl justify-evenly h-full min-sm:border border-black/20 min-sm:ml-5">
        <div className="flex flex-col gap-5 ">
          <p className="text-indigo-600">404</p>
          <h1 className="md:text-5xl max-md:text-4xl font-black">
            Página não encontrada
          </h1>
          <p className="text-black/70">
            Desculpe, não conseguimos encontrar a página que você está
            procurando.
          </p>

          <div>
            <Link
              href="/"
              className="text-indigo-600 hover:underline flex gap-1.5 items-center animate-pulse"
            >
              <GoArrowLeft />
              De volta para casa
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-[url('/imagens/not-found-2.jpg')] bg-center bg-cover bg-no-repeat hidden max-md:hidden md:flex justify-start items-center rounded-r-3xl my-5 md:w-xl h-full mr-5"></section>
    </article>
  );
}
