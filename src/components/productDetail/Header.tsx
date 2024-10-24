"use client";

import { useRouter } from "next/navigation";
import MoreIcon from "../common/icons/MoreIcon";
import ShareIcon from "../common/icons/ShareIcon";
import ClipboardCopyButton from "../common/ClipboardCopyButton";

export default function Header() {
  const router = useRouter();

  const getUrl = () => {
    if (typeof window === "undefined") {
      return null;
    }
    return window.location.href;
  };
  return (
    <header className="sticky top-0 flex justify-center px-4 py-[16.5px] bg-white border-b border-border z-50">
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2"
        onClick={() => router.back()}
      >
        <MoreIcon />
      </button>
      <h1 className="text-xl font-bold leading-[29px]">상품 상세</h1>
      <div className="absolute top-1/2 right-4 -translate-y-1/2 w-[22px] h-[22px]">
        <ClipboardCopyButton copyText={getUrl()}>
          <ShareIcon />
        </ClipboardCopyButton>
      </div>
    </header>
  );
}
