import { NICKNAME_DUPLICATE_ERROR_MESSAGE } from "@/constants/message/nickname";
import { nicknameValidationCheck } from "@/services/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get("nickname");

  if (!nickname) {
    return new Response("Bad Request", { status: 400 });
  }

  const data = await nicknameValidationCheck(nickname);

  if (data.nickname[0] === NICKNAME_DUPLICATE_ERROR_MESSAGE) {
    return new Response("The nickname is already in use.", { status: 400 });
  }

  return NextResponse.json(data);
}
