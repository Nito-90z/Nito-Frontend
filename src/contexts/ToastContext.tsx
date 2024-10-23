"use client";

import Toast2 from "@/components/common/Toast2";
import ToastPortal from "@/components/common/ToastPortal";
import { useToastStore } from "@/stores/toast";

type Props = {
  children: React.ReactNode;
};

export default function ToastProvider({ children }: Props) {
  const text = useToastStore.use.text();

  return (
    <>
      {children}
      {text && (
        <ToastPortal>
          <Toast2 text={text} />
        </ToastPortal>
      )}
    </>
  );
}
