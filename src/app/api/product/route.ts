import { getProducts } from '@/services/product';
import { NextRequest, NextResponse } from 'next/server';

const QUERY_KEYS = [
  'cursor',
  'page_size',
  'category_id',
  'is_lowest_price_ever',
  'is_out_of_stock',
  'ordering',
  'search',
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const queryParams = Object.fromEntries(
    QUERY_KEYS.map((key) => [key, searchParams.get(key)]),
  );

  const data = await getProducts(queryParams);

  return NextResponse.json(data);
}
