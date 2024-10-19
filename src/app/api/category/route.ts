import { getCategory } from "@/services/category";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const cursor = searchParams.get("cursor");
  const page_size = searchParams.get("page_size");

  const data = await getCategory(cursor, Number(page_size));

  return NextResponse.json(data);
}
