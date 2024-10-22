import { getProductPrice } from "@/services/product";
import { NextRequest, NextResponse } from "next/server";

type Context = {
  params: {
    id: string;
  };
};

export async function GET(_: NextRequest, { params: { id } }: Context) {
  const data = await getProductPrice(Number(id));

  return NextResponse.json(data);
}