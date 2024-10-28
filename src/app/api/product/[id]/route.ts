import { DEFAULT_ERROR_MESSAGE } from '@/constants';
import { getProduct } from '@/services/product';
import axios from 'axios';
import { NextRequest, NextResponse } from 'next/server';

type Context = {
  params: {
    id: string;
  };
};

export async function GET(_: NextRequest, { params: { id } }: Context) {
  try {
    const data = await getProduct(Number(id));

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
