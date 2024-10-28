import {
  BAD_REQUEST_ERROR_MESSAGE,
  NICKNAME_DUPLICATE_ERROR_MESSAGE,
} from '@/constants';
import { nicknameValidationCheck } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const nickname = searchParams.get('nickname');

  if (!nickname) {
    return NextResponse.json(
      { message: BAD_REQUEST_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  try {
    const data = await nicknameValidationCheck(nickname);

    if (data.nickname[0] === NICKNAME_DUPLICATE_ERROR_MESSAGE) {
      return NextResponse.json(
        { message: NICKNAME_DUPLICATE_ERROR_MESSAGE },
        { status: 400 },
      );
    }
    return NextResponse.json(data);
  } catch (error: any) {
    const errorMessage =
      error.status === 400
        ? NICKNAME_DUPLICATE_ERROR_MESSAGE
        : 'Something went wrong';

    return NextResponse.json(
      { message: errorMessage },
      { status: error.status || 500 },
    );
  }
}
