import { signIn } from "@/services/user";
import { checkIosDevice } from "@/utils/device";
import { cookies, headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

export async function POST(request: NextRequest) {
  const cookieStore = cookies();
  const headersList = headers();
  const uid = uuidv4();
  const token = uuidv4();

  try {
    const { body } = await request.json();
    const registerData = {
      ...body,
      device: {
        os: checkIosDevice(headersList.get("user-agent") || "")
          ? "ios"
          : "android",
        uid,
        token,
      },
    };

    const data = await signIn(registerData);
    cookieStore.set("uid", uid);
    cookieStore.set("token", token);

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
