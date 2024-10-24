"use client";

import { useToastStore } from "@/stores/toast";

export default function Toast2({ text }: { text: string }) {
  const setToast = useToastStore.use.setToast();

  return (
    <button
      className="absolute bottom-8 text-center w-full z-50"
      onClick={() => setToast(null)}
    >
      <div className="mx-[15px] py-4 bg-dark-gray">
        <p className="text-sm text-[#FFFFFF]">{text}</p>
      </div>
    </button>
  );
}
