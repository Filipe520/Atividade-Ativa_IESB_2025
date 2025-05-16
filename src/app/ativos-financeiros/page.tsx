"use client";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import FormSearch from "@components/formSearch";

import { useEffect, useState } from "react";

import Image from "next/image";
import imgBitcoin from "@public/imagens/bitcoin.svg";

const tickers = ["BTC"];
// "AAPL", "MSFT", "TSLA", "AMZN", "GOOGL"
export default function StockGrid() {
  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAll() {
      const results = await Promise.all(
        tickers.map((ticker) =>
          fetch(`/api/stock/${ticker}`)
            .then((res) => res.json())
            .then((data) => ({ ticker, data }))
            .catch(() => ({ ticker, data: null }))
        )
      );
      setStocks(results);
      setLoading(false);
    }

    fetchAll();
  }, []);

  if (loading)
    return (
      <p className="text-center mt-10 text-gray-600">Carregando ações...</p>
    );

  return (
    <div className="bg-white">
      <HeaderDesktop />
      <HeaderMobile />
      <section className="w-full mx-auto ml-15">
        <div className="flex justify-center mx-auto mt-10 bg-white">
          <FormSearch
            handledMenu={true}
            placeholder="Pesquisa alguma ação?"
            widthInput="w-60"
          />
        </div>
      </section>
      <div className="p-6 bg-white max-[779px]:ml-14">
        {stocks.map(({ ticker, data }) => {
          const stock = data?.results?.[0];
          if (!stock) {
            return (
              <div
                key={ticker}
                className="p-6 bg-red-100 text-red-600 rounded-xl shadow"
              >
                <p>
                  <strong>{ticker}</strong>
                </p>
                <p>Erro ao carregar dados.</p>
              </div>
            );
          }

          return (
            <section
              key={ticker}
              className="flex flex-col gap-5 py-10 max-w-[1200px] mx-auto"
            >
              <div className="flex items-center gap-2">
                <h2 className="text-2xl">
                  <strong>Preços de criptomoedas</strong>
                </h2>
                <p className="text-black/60">{1} ativos</p>
              </div>
              <p>
                O mercado de criptomoedas está em alta nesta semana. Observa-se
                um crescimento consistente na capitalização total do setor,
                indicando um aumento no interesse e na valorização dos ativos
                digitais em relação ao período anterior.
              </p>

              <section className="max-lg:overflow-x-auto py-10">
                <table className="border-collapse m-1 rounded-2xl mx-auto w-[900px]">
                  <thead>
                    <tr className="border border-sky-500 p-5 rounded-t-2xl flex items-center justify-center">
                      <th className="size-14 grow-3">Ativos</th>
                      <th className="size-14 grow-3 pl-10">Fechamento</th>
                      <th className="size-14 grow-3 pl-10">Abertura</th>
                      <th className="size-14 grow-3 pl-0">Alta</th>
                      <th className="size-14 grow-3 pl-0">Baixa</th>
                      <th className="size-14 grow-3 pl-0">Volume</th>
                      <th className="size-14 grow-3 pl-0">Data</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border border-sky-500 flex justify-center items-center rounded-b-2xl p-5">
                      <div className="flex items-center px-5 py-2 justify-center gap-2">
                        <Image
                          src={imgBitcoin}
                          alt="Imagem da moeda Bitcoin"
                          width={50}
                          height={50}
                        />
                        <div className="flex flex-col pr-10">
                          <td className="font-bold ">Bitcoin</td>
                          <td className="text-xs ">{ticker}</td>
                        </div>
                      </div>
                      <td className="size-7 grow-1">{stock.c.toFixed(2)}</td>
                      <td className="size-7 grow-1">{stock.o.toFixed(2)}</td>
                      <td className="size-7 grow-1">{stock.h.toFixed(2)}</td>
                      <td className="size-7 grow-1">{stock.h.toFixed(2)}</td>
                      <td className="size-7 grow-1">
                        {stock.v.toLocaleString()}
                      </td>
                      <td className="size-7 grow-1">
                        {new Date(stock.t).toLocaleDateString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </section>
            </section>
          );
        })}
      </div>
    </div>
  );
}
