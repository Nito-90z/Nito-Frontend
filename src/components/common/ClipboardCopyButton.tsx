"use client";

import { useToastStore } from "@/stores/toast";

type Props = {
  copyText: string;
  children: React.ReactNode;
};

export default function ClipboardCopyButton({ copyText, children }: Props) {
  const setToast = useToastStore.use.setToast();

  const handleCopy = async (text: string) => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(text);
        setToast("클립보드에 복사되었습니다.");
        setTimeout(() => setToast(null), 5000);
      } catch (error) {
        console.log(error);
        setToast("복사를 다시 시도해주세요.");
      }
    }
  };
  return <button onClick={() => handleCopy(copyText)}>{children}</button>;
}
