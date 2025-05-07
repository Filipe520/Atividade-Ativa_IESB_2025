import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type ButtonBlackProps = {
  textButton: string;
  router: string;
  icone: React.ReactNode;
};

export default function ButtonBlack({
  textButton,
  router,
  icone,
}: ButtonBlackProps) {
  const libRouter = useRouter();
  return (
    <div className="flex items-center">
      <button
        className={`py-2 px-3 bg-black/70 rounded-md w-full text-white items-center justify-center gap-2 flex`}
        onClick={() => libRouter.push(router)}
      >
        {icone}
        <Link href="#" className="hover:text-white/30 text-white">
          {textButton}
        </Link>
      </button>
    </div>
  );
}
