'use client';

import { useToastStore } from '@/stores/toast';

export default function Toast2({ text }: { text: string }) {
  const setToast = useToastStore.use.setToast();

  return (
    <button
      className="absolute bottom-8 z-50 w-full text-center"
      onClick={() => setToast(null)}
    >
      <div className="mx-[15px] bg-dark-gray py-4">
        <p className="text-sm text-[#FFFFFF]">{text}</p>
      </div>
    </button>
  );
}
