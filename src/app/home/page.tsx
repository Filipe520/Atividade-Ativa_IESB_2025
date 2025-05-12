import styles from "./styles.module.css";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";

import Image from "next/image";
import imgBitcoin from "@public/imagens/bitcoin.svg";
import imgBitcoinYellow from "@public/imagens/bitcoin_white.svg";
import imgEthereum from "@public/imagens/ethereum.svg";

import { IoIosArrowBack } from "react-icons/io";
import { HiMiniArrowTrendingUp } from "react-icons/hi2";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { RiExchangeDollarFill } from "react-icons/ri";

export default function Home() {
  return (
    <div className={`bg-black/90`}>
      <HeaderDesktop />
      <HeaderMobile />
      <article className="flex flex-col w-[md] max-[500px]:ml-5 text-white min-[500px]:mt-10 min-[500px]:max-w-[1200px] min-[500px]:m-auto">
        <section className="w-full max-[500px]:bg-black/95 h-full pb-15">
          {/* navegação mobile */}
          <div className=" max-[500px]:mt-5 text-2xl w-[280px] h-[50px] font-extrabold hidden max-[500px]:block ">
            <div className="flex justify-around items-center">
              <IoIosArrowBack />
              <h2>BitNext</h2>
            </div>
          </div>
          {/* saldo cripto */}
          <section className="ml-14 max-[500px]:ml-10">
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-2xl max-[500px]:w-[300px] max-[500px]:h-[150px] max-[500px]:mt-2 flex flex-col max-[500px]:justify-between min-[500px]:w-[500px] min-[500px]:h-[200px] border p-2 border-blue-400">
                <section className="bg-black border border-white rounded-tl-2xl rounded-tr-2xl p-2 flex justify-between items-center">
                  <Image
                    src={imgBitcoinYellow}
                    alt="imagem da moeda bitcoin"
                    width={30}
                    height={30}
                  ></Image>
                  <div className="border-l border-white px-3">
                    <MdOutlineRemoveRedEye />
                  </div>
                </section>
                <section className="text-black flex gap-3 flex-col pb-2 px-4 min-[500px]:pt-5">
                  <p>saldo total em cripto</p>
                  <div className="flex justify-between">
                    <p className="text-4xl font-semibold">R$ 16,11</p>
                    <div className="flex items-center h-7 gap-2  bg-black/10 px-1 rounded-2xl text-sm">
                      <HiMiniArrowTrendingUp />
                      <span className="font-bold">R$0,00</span>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </section>
        </section>

        {/* suas criptomoedas */}
        <section
          className={`bg-white rounded-xl text-black p-5 max-md:ml-10 ml-0`}
        >
          <div>
            <h2 className="font-semibold py-5">Suas criptomoedas</h2>

            {/* card cripto */}
            <section className="bg-white border p-2 border-blue-400 rounded-xl flex text-xs justify-around items-center min-[500px]:w-3/5 m-auto">
              <article className="flex gap-5">
                <div>
                  <Image
                    src={imgBitcoin}
                    alt="imagem da moeda bitcoin"
                    width={50}
                    height={50}
                  ></Image>
                </div>

                <div className="flex gap-1 flex-col">
                  <h2 className="text-sm">BITCOIN(BTC)</h2>
                  <p className="text-black/60">000000000 BTC</p>
                </div>
              </article>
              <div className="flex flex-col items-center justify-center gap-1">
                <div className="flex gap-1  bg-black/10 px-1 rounded-2xl">
                  <HiMiniArrowTrendingUp />
                  <span>R$0,00</span>
                </div>
                <div className="text-[15px] font-bold">
                  <span>R$16,11</span>
                </div>
              </div>
            </section>
            <section className={`py-10`}>
              <h2>Cripto disponíveis</h2>

              {/* cripto 1 */}
              <article className="bg-white px-4 py-3 mt-5 flex justify-between rounded-sm border p-2 border-blue-400">
                <section className="flex gap-2">
                  <Image
                    src={imgBitcoin}
                    alt="imagem da moeda bitcoin"
                    width={30}
                    height={30}
                  ></Image>
                  <div>
                    <p>BTC</p>
                    <p className="text-xs">Real</p>
                  </div>
                </section>
                <section>
                  <p>R$ 1,17</p>
                </section>
              </article>
              {/* cripto 2 */}
              <article className="bg-white px-4 py-3 mt-5 flex justify-between rounded-sm border p-2 border-blue-600">
                <section className="flex gap-2">
                  <Image
                    src={imgEthereum}
                    alt="imagem da moeda Ethereum"
                    width={25}
                    height={25}
                  ></Image>
                  <div>
                    <p>ETH</p>
                    <p className="text-xs">Real</p>
                  </div>
                </section>
                <section>
                  <p>R$ 2,19</p>
                </section>
              </article>
              {/* cripto 3 */}
              <article className="bg-white px-4 py-3 mt-5 flex justify-between rounded-sm border p-2 border-blue-400">
                <section className="flex gap-2">
                  <Image
                    src={imgBitcoin}
                    alt="imagem da moeda bitcoin"
                    width={30}
                    height={30}
                  ></Image>
                  <div>
                    <p>BTC</p>
                    <p className="text-xs">Real</p>
                  </div>
                </section>
                <section>
                  <p>R$ 1,17</p>
                </section>
              </article>
            </section>
          </div>
          <section className="bg-white border p-4 rounded-xl border-blue-400">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <HiMiniArrowTrendingUp />
                <p className="text-xs text-black/70">Investimentos</p>
              </div>
              <IoIosArrowForward />
            </div>
            <div className="pt-5">
              <p className="text-sm text-black/80">Total investido</p>
              <span>R$5.000,00</span>
            </div>
          </section>
          <section className="bg-white border p-4 rounded-xl border-blue-400 mt-5">
            <div className="flex justify-between">
              <div className="flex gap-1">
                <RiExchangeDollarFill />
                <p className="text-xs  text-black/70">Crédito</p>
              </div>
              <IoIosArrowForward />
            </div>
            <div className="py-5 flex flex-col gap-0.5">
              <p className="text-sm text-black/80">Empréstimo Pessoal até</p>
              <span>R$75.000,00</span>
              <p className="text-black/80">Sujeito á análise</p>
            </div>
            <div className="border-t border-black/40 py-5">
              <p className="text-black/80">
                Você pode conferir essa e outras ofertas por aqui. Aproveite
              </p>
            </div>
          </section>
        </section>
      </article>
    </div>
  );
}
