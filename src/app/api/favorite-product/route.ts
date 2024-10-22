import { addFavoriteProduct } from "@/services/product";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { productId } = await request.json();

  if (!productId) {
    return NextResponse.json({ message: "Bad Request" }, { status: 400 });
  }

  try {
    const data = await addFavoriteProduct(productId);

    return NextResponse.json(data);
  } catch (error: any) {
    const errorMessage =
      error.status === 400
        ? error.response.data.nonField[0]
        : "Something went wrong";

    return NextResponse.json(
      { message: errorMessage },
      { status: error.status || 500 } // 에러가 있다면 해당 코드, 없으면 500
    );
  }
}
