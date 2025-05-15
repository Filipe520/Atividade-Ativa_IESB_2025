"use client";

import HeaderDesktop from "@components/layout/header/headerDesktop";
import HeaderMobile from "@components/layout/header/headerMobile";
import FormSearch from "@components/formSearch";

import { useEffect, useState } from "react";

const tickers = ["GOOGL"];
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
      <div className="flex justify-center mt-10 mb-6 bg-white">
        <FormSearch
          handledMenu={true}
          placeholder="Pesquisa alguma ação?"
          widthInput="w-60"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white max-[779px]:ml-14">
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
            <div
              key={ticker}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-2">{ticker}</h3>
              <div className="space-y-1 text-gray-700 text-sm">
                <p>
                  <strong>Fechamento:</strong> ${stock.c.toFixed(2)}
                </p>
                <p>
                  <strong>Abertura:</strong> ${stock.o.toFixed(2)}
                </p>
                <p>
                  <strong>Alta:</strong> ${stock.h.toFixed(2)}
                </p>
                <p>
                  <strong>Baixa:</strong> ${stock.l.toFixed(2)}
                </p>
                <p>
                  <strong>Volume:</strong> {stock.v.toLocaleString()}
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-2">
                Data: {new Date(stock.t).toLocaleDateString()}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
