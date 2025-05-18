import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import FormSearch from "@components/formSearch";

import Image from "next/image";
import imgBitcoin from "@public/imagens/bitcoin.svg";
import imgEthereum from "@public/imagens/ethereum.svg";

export default function Ativos() {
  return (
    <article className="bg-white">
      <HeaderDesktop />
      <HeaderMobile />
      <div className="min-md:flex min-md:justify-center max-md:block">
        <section className="max-md:ml-15 max-md:p-5">
          <section className="flex flex-col gap-5 py-10 max-w-[1200px] min-md:mx-2 mx-auto">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl">
                <strong>Preços de criptomoedas</strong>
              </h2>
              <p className="text-black/60">{1} ativos</p>
            </div>
            <p>
              O mercado de criptomoedas está em alta nesta semana. Observa-se um
              crescimento consistente na capitalização total do setor, indicando
              um aumento no interesse e na valorização dos ativos digitais em
              relação ao período anterior.
            </p>

            <FormSearch
              placeholder="Pesquisa alguma ações?"
              rota="/not"
              styles="py-3 min-md:w-96 w-full mx-auto"
            />
            <section className="max-lg:overflow-x-auto py-10">
              <table className="border-collapse m-1 rounded-2xl mx-auto w-[900px]">
                <thead className="border border-sky-500 p-5 rounded-2xl">
                  <tr>
                    <th className="size-14 grow-3">Ativos</th>
                    <th className="size-14 grow-3 pl-10">Fechamento</th>
                    <th className="size-14 grow-3 pl-0">Alta</th>
                    <th className="size-14 grow-3 pl-0">Baixa</th>
                    <th className="size-14 grow-3 pl-0">Volume</th>
                    <th className="size-14 grow-3 pl-0">Data</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgBitcoin}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$103.581,00</td>
                    <td className="p-2 text-center">$104.305,00</td>
                    <td className="p-2 text-center">$103.300,00</td>
                    <td className="p-2 text-center">54.580</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>
                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgEthereum}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$110.139,00</td>
                    <td className="p-2 text-center">$101.690,00</td>
                    <td className="p-2 text-center">$115.520,00</td>
                    <td className="p-2 text-center">40.320</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>

                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgEthereum}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$110.139,00</td>
                    <td className="p-2 text-center">$101.690,00</td>
                    <td className="p-2 text-center">$115.520,00</td>
                    <td className="p-2 text-center">40.320</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>
                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgBitcoin}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$103.581,00</td>
                    <td className="p-2 text-center">$104.305,00</td>
                    <td className="p-2 text-center">$103.300,00</td>
                    <td className="p-2 text-center">54.580</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>
                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgEthereum}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$110.139,00</td>
                    <td className="p-2 text-center">$101.690,00</td>
                    <td className="p-2 text-center">$115.520,00</td>
                    <td className="p-2 text-center">40.320</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>

                  <tr className="border border-sky-500 rounded-b-2xl">
                    <td className="p-5">
                      <div className="flex items-center justify-center gap-2">
                        <Image
                          src={imgEthereum}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <div className="font-bold">Bitcoin</div>
                          <div className="text-xs">BTC</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-2 text-center">$110.139,00</td>
                    <td className="p-2 text-center">$101.690,00</td>
                    <td className="p-2 text-center">$115.520,00</td>
                    <td className="p-2 text-center">40.320</td>
                    <td className="p-2 text-center">16/05/2025</td>
                  </tr>
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </div>
    </article>
  );
}
