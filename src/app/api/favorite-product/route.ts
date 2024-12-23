import { BAD_REQUEST_ERROR_MESSAGE, DEFAULT_ERROR_MESSAGE } from '@/constants';
import {
  addFavoriteProduct,
  deleteFavoriteProducts,
  getFavoriteProducts,
  setFavoriteProductAlarm,
} from '@/services/product';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

const QUERY_KEYS = ['cursor', 'page_size', 'ordering'];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const queryParams = Object.fromEntries(
    QUERY_KEYS.map((key) => [key, searchParams.get(key)]),
  );

  const data = await getFavoriteProducts(queryParams);

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const { productId } = await request.json();

  if (!productId) {
    return NextResponse.json(
      { message: BAD_REQUEST_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  try {
    const data = await addFavoriteProduct(productId);

    return NextResponse.json(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.status === 400
          ? error.response?.data.nonField[0]
          : DEFAULT_ERROR_MESSAGE;

      return NextResponse.json(
        { message: errorMessage },
        { status: error.status || 500 },
      );
    }
    console.log(error);
  }
}

export async function DELETE(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const ids = searchParams.get('ids');

  if (!ids) {
    return NextResponse.json(
      { message: BAD_REQUEST_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  const idsArray = ids.split(',').map(Number);

  try {
    await deleteFavoriteProducts(idsArray);

    return NextResponse.json({ message: 'Deleted!' }, { status: 200 });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.status === 404
          ? error.response?.data.detail
          : DEFAULT_ERROR_MESSAGE;

      return NextResponse.json(
        { message: errorMessage },
        { status: error.status || 500 },
      );
    }
    console.log(error);
  }
}

export async function PUT(request: NextRequest) {
  const { productId, isAlarm } = await request.json();

  if (!productId || isAlarm == null) {
    return NextResponse.json(
      { message: BAD_REQUEST_ERROR_MESSAGE },
      { status: 400 },
    );
  }

  try {
    const data = await setFavoriteProductAlarm(productId, isAlarm);

    return NextResponse.json(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.status === 404
          ? error.response?.data.detail
          : DEFAULT_ERROR_MESSAGE;

      return NextResponse.json(
        { message: errorMessage },
        { status: error.status || 500 },
      );
    }
    console.log(error);
  }
}
