import { getExchangeRate } from '@/services/exchange';
import { NextResponse } from 'next/server';

export async function GET() {
  const data = await getExchangeRate();

  return NextResponse.json(data);
}
