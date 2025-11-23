"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface ButtonCustomProps {
  textButton: string;
  icone?: React.ReactNode;
  color?: string;
  router?: string;
  type: "submit" | "button";
}

export const ButtonCustom: React.FC<ButtonCustomProps> = ({
  textButton,
  icone,
  color = "",
  router,
  type,
}) => {
  if (router) {
  }
  const navigate = useRouter();

  const handleClick = () => {
    if (router) navigate.push(`${router}`);
  };

  return (
    <button
      type={type}
      onClick={handleClick}
      className={`flex items-center gap-2 justify-center px-4 py-2 ${color}`}
    >
      {icone}
      <span>{textButton}</span>
    </button>
  );
};
