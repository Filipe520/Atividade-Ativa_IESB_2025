import Link from "next/link";
import React from "react";

interface ButtonCustomProps {
  textButton: string;
  router: string;
  icone?: React.ReactNode;
  color?: string;
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({
  textButton,
  router,
  icone,
  color = "",
}) => {
  return (
    <Link
      href={router}
      className={`flex items-center gap-2 justify-center px-4 py-2 ${color}`}
    >
      {icone}
      <span>{textButton}</span>
    </Link>
  );
};
