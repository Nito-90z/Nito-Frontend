import { signIn } from "@/services/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { body } = await request.json();
    const registerData = {
      ...body,
      device: {
        os: "ios",
        uid: "uid",
        token: "token",
      },
    };

    const data = await signIn(registerData);

    return NextResponse.json(data);
  } catch (error: any) {
    const errorMessage =
      error.status === 400
        ? error.response.data.nickname[0]
        : "Something went wrong";

    return NextResponse.json(
      { message: errorMessage },
      { status: error.status || 500 } // 에러가 있다면 해당 코드, 없으면 500
    );
  }
}
