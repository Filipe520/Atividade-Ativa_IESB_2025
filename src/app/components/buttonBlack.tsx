"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type ButtonBlackProps = {
  textButton: string;
  router: string;
  icone: React.ReactNode;
  color?: string;
};

export default function ButtonBlack({
  textButton,
  router,
  icone,
  color,
}: ButtonBlackProps) {
  const libRouter = useRouter();
  return (
    <div className={`flex items-center ${color}`}>
      <button
        className={`py-2 px-3 w-full items-center justify-center gap-2 flex`}
        onClick={() => libRouter.push(router)}
      >
        {icone}
        <Link href="#">{textButton}</Link>
      </button>
    </div>
  );
}
