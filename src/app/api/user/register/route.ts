import { signIn } from "@/services/user";
import { checkDevice } from "@/utils/device";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const headersList = headers();

  try {
    const { body } = await request.json();
    const registerData = {
      ...body,
      device: {
        os: checkDevice(headersList.get("user-agent") || "")
          ? "ios"
          : "android",
        uid: uuidv4(),
        token: uuidv4(),
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
