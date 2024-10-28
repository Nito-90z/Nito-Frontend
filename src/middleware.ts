import { NextResponse, NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const accessToken = cookies.get('accessToken')?.value;

  // request에 access token이 없는 경우(로그인하지 않은 경우)
  if (!accessToken) {
    // 회원가입 / 회원가입에 필요한 api 요청(닉네임 자동완성, 닉네임 중복확인)인 경우 정상 동작
    if (
      nextUrl.pathname.startsWith('/signin') ||
      nextUrl.pathname.startsWith('/api/user')
    ) {
      return NextResponse.next();
    }

    // 로그인은 했지만 access token이 없는 상태로 api 요청한 경우(말이 안되는데)
    if (nextUrl.pathname.startsWith('/api')) {
      return NextResponse.json(
        { message: 'Authentication Error' },
        { status: 444 },
      );
    }

    const { pathname, search, origin, basePath } = nextUrl;
    const signInUrl = new URL(`${basePath}/signin`, origin);
    signInUrl.searchParams.append(
      'callbackUrl',
      `${basePath}${pathname}${search}`,
    );
    // 로그인하지 않는 사용자가 로그인이 필요한 페이지에 접근 시 로그인 페이지로 이동
    return NextResponse.redirect(signInUrl);
  }

  // request에 access token이 있고(로그인한 상태), 회원가입 페이지로 이동한 경우 '/' 경로로 이동
  if (nextUrl.pathname.startsWith('/signin')) {
    return NextResponse.redirect(nextUrl.origin);
  }
  return NextResponse.next();
}
export const config = {
  matcher: [
    '/',
    '/product-list',
    '/product-list/product/:path*',
    '/search',
    '/mypage',
    '/signin',
    '/api/category',
    '/api/favorite-product',
    '/api/product',
    '/api/product/:path*',
    '/api/user/:path*',
  ],
};
