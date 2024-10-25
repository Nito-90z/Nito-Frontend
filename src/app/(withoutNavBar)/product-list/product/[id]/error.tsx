'use client';

import Button from '@/components/common/Button';
import LogoIcon from '@/components/common/icons/LogoIcon';
import axios from 'axios';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 404) {
      notFound();
    }
  }
  return (
    <section className="flex h-full w-full flex-col items-center justify-around gap-4 px-4 text-center">
      <div />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center gap-3 text-brand">
          <div>
            <p className="text-xs leading-[18px]">
              Lowest price notification platform
            </p>
            <h1 className="text-[26px] font-bold">최저가 알림 플랫폼</h1>
          </div>
          <Link href="/product-list">
            <LogoIcon />
          </Link>
        </div>
        <div className="flex w-full flex-col px-4 text-center">
          <h2 className="text-3xl font-bold text-brand">
            Something went wrong.
          </h2>
          <p className="text-[#1E1E1E]">해당 페이지를 찾을 수 없습니다.</p>
        </div>
      </div>
      <div className="flex w-full flex-col gap-2">
        <Link
          href="/"
          replace
          className="w-full bg-brand py-[14px] font-bold text-white"
        >
          홈으로
        </Link>
        <Button onClick={() => reset()} className="font-bold">
          다시 시도
        </Button>
      </div>
    </section>
  );
}
