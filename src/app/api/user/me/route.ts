import { NextRequest, NextResponse } from 'next/server';
import { getUserInfo, updateUserInfo } from '@/services/user';

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

export async function PATCH(request: NextRequest) {
  try {
    const data = await request.json();
    const updatedUserInfo = await updateUserInfo(data);
    return NextResponse.json(updatedUserInfo);
  } catch (error: any) {
    console.error('Error updating user info:', error);
    return NextResponse.json(
      { message: 'Failed to update user info' },
      { status: 500 }
    );
  }
}