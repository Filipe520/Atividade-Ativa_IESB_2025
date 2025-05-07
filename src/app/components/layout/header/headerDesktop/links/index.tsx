import Link from "next/link";

export default function HeaderDesktopLinks() {
  return (
    <nav className="md:flex justify-center gap-2.5 w-lg max-w-[500px] hidden">
      <ul className="text-sm text-gray-800/75 font-bold flex justify-evenly gap-5">
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="#">Comprar / Vender</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="#">Crescer</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="#">Mercados</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="#">Negócios</Link>
        </li>
        <li className="cursor-pointer transition-colors hover:text-gray-900">
          <Link href="/sobre">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
