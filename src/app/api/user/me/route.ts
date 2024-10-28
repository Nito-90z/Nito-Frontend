import { NextResponse } from 'next/server';
import { getUserInfo } from '@/services/user';

export async function GET() {
  try {
    const userInfo = await getUserInfo();
    return NextResponse.json(userInfo);
  } catch (error: any) {
    console.error('Error fetching user info:', error);
    return NextResponse.json(
      { message: 'Failed to fetch user info' },
      { status: 500 }
    );
  }
}
