import { addFavoriteProduct } from "@/services/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { productId } = await request.json();

  if (!productId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  const data = await addFavoriteProduct(productId);

  return NextResponse.json(data);
}
