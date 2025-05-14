"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

type ButtonBlueProps = {
  textButton: string;
  icone?: React.ReactNode;
  router?: string;
  color?: string;
};

export default function ButtonBlue({
  textButton,
  icone,
  router,
  color,
}: ButtonBlueProps) {
  const routerDest = useRouter();
  return (
    <div className={`flex items-center ${color}`}>
      <button
        className={` py-2 px-3 flex gap-2 items-center justify-center`}
        onClick={() => routerDest.push(router)}
      >
        {icone}
        <Link href="#" className="animate-pulse">
          {textButton}
        </Link>
      </button>
    </div>
  );
}
