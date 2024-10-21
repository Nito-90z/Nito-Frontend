"use client";

import { useRouter } from "next/navigation";
import MoreIcon from "../common/icons/MoreIcon";
import ShareIcon from "../common/icons/ShareIcon";

export default function Header() {
  const router = useRouter();

  return (
    <header className="sticky top-0 flex justify-center px-4 py-[16.5px] bg-white border-b border-border z-50">
      <button
        className="absolute top-0 bottom-0 left-4"
        onClick={() => router.back()}
      >
        <MoreIcon />
      </button>
      <h1 className="text-xl font-bold leading-[29px]">상품 상세</h1>
      <button className="absolute top-0 bottom-0 right-4">
        <ShareIcon />
      </button>
    </header>
  );
}
