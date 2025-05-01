import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Banco Cripto - A Nova Era das Finanças",
  description:
    "Transforme suas finanças com a segurança e transparência da tecnologia blockchain.",
};

import HeaderLogin from "@components/layout/headerLogin";
import FooterLogin from "@components/layout/footerLogin";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderLogin></HeaderLogin>
        {children}
        <FooterLogin />
      </body>
    </html>
  );
}
