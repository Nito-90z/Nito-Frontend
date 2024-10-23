import { withdrawUser } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { reason } = await request.json();
    const data = await withdrawUser(reason);
    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Error withdrawing user:', error);
    return NextResponse.json(
      { message: 'Failed to withdraw user' },
      { status: 500 }
    );
  }
}