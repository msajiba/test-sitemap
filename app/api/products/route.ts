import axios from "axios";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic"; // This ensures the route is always dynamic

export const GET = async () => {
  const { data } = await axios.get(
    "https://pqsjapanapi.azurewebsites.net/api/vehicle/getThirdPartyStockListForSEO"
  );
  const products = data;

  const response = NextResponse.json(products);
  response.headers.set("Cache-Control", "public, max-age=3600");
  return response;
};
