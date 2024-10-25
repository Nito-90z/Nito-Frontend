'use client';

import { useRouter } from 'next/navigation';
import MoreIcon from '../common/icons/MoreIcon';
import ShareIcon from '../common/icons/ShareIcon';
import ClipboardCopyButton from '../common/ClipboardCopyButton';

export default function Header() {
  const router = useRouter();

  const getUrl = () => {
    if (typeof window === 'undefined') {
      return null;
    }
    return window.location.href;
  };
  return (
    <header className="sticky top-0 z-50 flex justify-center border-b border-border bg-white px-4 py-[16.5px]">
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2"
        onClick={() => router.back()}
      >
        <MoreIcon />
      </button>
      <h1 className="text-xl font-bold leading-[29px]">상품 상세</h1>
      <div className="absolute right-4 top-1/2 h-[22px] w-[22px] -translate-y-1/2">
        <ClipboardCopyButton copyText={getUrl()}>
          <ShareIcon />
        </ClipboardCopyButton>
      </div>
    </header>
  );
}
