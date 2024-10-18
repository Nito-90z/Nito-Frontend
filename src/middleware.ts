import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const accessToken = cookies.get("accessToken");

  if (!accessToken) {
    // 인증되지 않은 사용자의 api 요청인 경우 401 코드로 반환
    if (nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "Authentication Error" },
        { status: 401 }
      );
    }

    const { pathname, search, origin, basePath } = nextUrl;
    const signInUrl = new URL(`${basePath}/signin`, origin);
    signInUrl.searchParams.append(
      "callbackUrl",
      `${basePath}${pathname}${search}`
    );

    // 로그인하지 않는 사용자가 로그인이 필요한 페이지에 접근 시 로그인 페이지로 이동
    return NextResponse.redirect(signInUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/product-list", "/search", "/mypage"],
};
