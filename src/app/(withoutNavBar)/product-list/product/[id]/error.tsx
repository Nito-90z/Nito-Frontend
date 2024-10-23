"use client";

import Button from "@/components/common/Button";
import axios from "axios";
import { notFound } from "next/navigation";
import { useEffect } from "react";

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
    <section className="flex flex-col justify-center items-center h-full">
      <h2>Something went wrong!</h2>
      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </section>
  );
}
