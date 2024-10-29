import { NextRequest, NextResponse } from 'next/server';
import { getUserInfo, withdraw } from '@/services/user';
import { BAD_REQUEST_ERROR_MESSAGE, DEFAULT_ERROR_MESSAGE } from '@/constants';

export async function GET() {
  try {
    const userInfo = await getUserInfo();
    return NextResponse.json(userInfo);
  } catch (error: any) {
    console.error('Error fetching user info:', error);
    return NextResponse.json(
      { message: 'Failed to fetch user info' },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  const { reason } = await request.json();

  if (!reason) {
    return NextResponse.json(
      { message: BAD_REQUEST_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  try {
    await withdraw(reason);

    return NextResponse.json({ message: 'Withdrawn!' }, { status: 200 });
  } catch (error) {
    console.error('Error fetching user info:', error);
    return NextResponse.json(
      { message: DEFAULT_ERROR_MESSAGE },
      { status: 500 },
    );
  }
}
