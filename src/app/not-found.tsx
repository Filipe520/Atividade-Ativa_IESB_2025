import Link from "next/link";
import { GoArrowLeft } from "react-icons/go";

import Image from "next/image";
import imgLogo from "@public/imagens/logo_sem_fundo.png";

export default function NotFound() {
  return (
    <article className="flex max-md:flex-col justify-center items-center mx-auto  bg-white min-[500px]:h-[900px] h-[500px] min-sm:py-5">
      <section className="bg-white p-10 md:rounded-l-3xl  max-md:rounded-3xl flex flex-col md:w-xl justify-evenly h-full min-sm:border border-black/20 min-sm:ml-5">
        <div className="inline-block">
          <Image
            src={imgLogo}
            alt="Logo do banco BitNext"
            width={40}
            height={40}
          />
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-indigo-600">404</p>
          <h1 className="md:text-5xl max-md:text-4xl font-black">
            Page not found
          </h1>
          <p className="text-black/70">
            Sorry, we couldn’t find the page you’re looking for.
          </p>

          <div>
            <Link
              href="/"
              className="text-indigo-600 hover:underline flex gap-1.5 items-center animate-pulse"
            >
              <GoArrowLeft />
              Back to home
            </Link>
          </div>
        </div>
      </section>
      <section
        className="bg-white flex justify-start items-center rounded-r-3xl my-5 md:w-xl h-full mr-5 max-md:hidden"
        style={{
          backgroundImage: "url('/imagens/not-found-2.jpg')",
          backgroundPosition: "center, center",
          backgroundSize: "cover",
        }}
      ></section>
    </article>
  );
}
