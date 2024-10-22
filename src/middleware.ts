import { NextResponse, NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const accessToken = cookies.get("accessToken")?.value;

  if (!accessToken) {
    if (
      nextUrl.pathname.startsWith("/signin") ||
      nextUrl.pathname.startsWith("/api/user")
    ) {
      return NextResponse.next();
    }

    if (nextUrl.pathname.startsWith("/api")) {
      return NextResponse.json(
        { message: "Authentication Error" },
        { status: 444 }
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

  if (nextUrl.pathname.startsWith("/signin")) {
    return NextResponse.redirect(nextUrl.origin);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/",
    "/product-list",
    "/product-list/product/:path*",
    "/search",
    "/mypage",
    "/signin",
    "/api/category",
    "/api/favorite-product",
    "/api/product/:path*",
    "/api/user/:path*",
  ],
};
