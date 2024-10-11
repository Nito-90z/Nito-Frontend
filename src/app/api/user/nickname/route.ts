import { generateNickname } from "@/services/user";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await generateNickname();

  return NextResponse.json(data);
}
