"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { IoSearchOutline } from "react-icons/io5";

type FormSearchProps = {
  placeholder?: string;
  handledMenu?: boolean;
  widthInput?: string;
};

export default function FormSearch({
  placeholder,
  handledMenu,
  widthInput,
}: FormSearchProps) {
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputValue.trim() === "") return;

    // Redireciona para a página com o ticker
    router.push(`/stock/${inputValue.toUpperCase()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`transition-all ease-out ${
        handledMenu ? widthInput : "w-10"
      } bg-black/70 p-2 rounded-md text-white flex text-base`}
    >
      <label htmlFor="idSearch" className="cursor-pointer m-1 ">
        <IoSearchOutline />
      </label>
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        id="idSearch"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={`${
          handledMenu ? "flex" : "hidden"
        } ml-5 pl-1 ${widthInput} outline-none animate-pulse bg-transparent`}
      />
    </form>
  );
}
