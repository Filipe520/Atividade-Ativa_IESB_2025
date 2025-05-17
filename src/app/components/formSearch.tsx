"use client";

import { IoSearchOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

type FormSearchProps = {
  placeholder?: string;
  styles?: string;
  rota: string;
};

export default function FormSearch({
  placeholder,
  styles,
  rota,
}: FormSearchProps) {
  const router = useRouter();

  return (
    <form
      className={`transition-all ease-out ${styles} 
       p-2 my-10 text-black flex items-center justify-center text-base rounded-2xl border border-sky-500`}
      action={() => router.push(`${rota}`)}
    >
      <label htmlFor="idSearch" className="cursor-pointer m-1 ">
        <IoSearchOutline />
      </label>
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        id="idSearch"
        className={`ml-5 pl-1 outline-none animate-pulse bg-transparent`}
      />
    </form>
  );
}
