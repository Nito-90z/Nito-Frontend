'use client';

import Button from '@/components/common/Button';
import axios from 'axios';
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
    <section className="flex h-full flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </section>
  );
}
