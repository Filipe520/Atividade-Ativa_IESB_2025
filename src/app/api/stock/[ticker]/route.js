// /app/api/stock/[ticker]/route.js
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { ticker } = params; // O valor do ticker vem da URL, por exemplo, 'AAPL'
  const apiKey = process.env.POLYGON_API_KEY;

  // Requisição para a API externa
  const res = await fetch(
    `https://api.polygon.io/v2/aggs/ticker/${ticker}/prev?apiKey=${apiKey}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Erro ao buscar dados" },
      { status: 500 }
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}
