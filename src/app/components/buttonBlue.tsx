"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ButtonBlueProps = {
  textButton: string;
  icone: React.ReactNode;
  router: string;
};

export default function ButtonBlue({
  textButton,
  icone,
  router,
}: ButtonBlueProps) {
  const routerDest = useRouter();
  return (
    <div className="flex items-center">
      <button
        className={` py-2 px-3 bg-blue-600 flex rounded-md w-full gap-2 items-center justify-center text-white`}
        onClick={() => routerDest.push(router)}
      >
        {icone}
        <Link href="#" className="hover:text-gray-900 animate-pulse">
          {textButton}
        </Link>
      </button>
    </div>
  );
}
