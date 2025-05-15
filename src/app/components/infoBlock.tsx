import { ReactNode } from "react";

type PropInfoBlock = {
  icon: ReactNode;
  titulo: string;
  paragrafo: string;
};

export default function InfoBlock({ icon, titulo, paragrafo }: PropInfoBlock) {
  return (
    <section className="flex flex-col gap-5 pt-20">
      <div className="flex gap-2">
        {icon}
        <h2 className="text-xl text-black/80">
          <strong>{titulo}</strong>
        </h2>
      </div>
      <p>{paragrafo}</p>
    </section>
  );
}
