import Link from "next/link";

export default function HeaderDesktopLinks() {
  return (
    <>
      <ul className="text-sm text-gray-800/75 font-bold flex justify-evenly gap-5">
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="#">Comprar / Vender</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="ativos-financeiros">Ativos Financeiros</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/sobre">Sobre nós</Link>
        </li>
      </ul>
    </>
  );
}
