import Link from "next/link";

export default function HeaderDesktopLinks({
  styles = "text-black/60",
}: {
  styles?: string;
}) {
  return (
    <>
      <ul className={`text-sm ${styles} font-bold flex justify-evenly gap-5`}>
        <li className="cursor-pointer transition-colors hover:text-sky-500">
          <Link href="/">Início</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-sky-500">
          <Link href="ativos-financeiros">Ativos Financeiros</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-sky-500">
          <Link href="/sobre">Sobre nós</Link>
        </li>
      </ul>
    </>
  );
}
