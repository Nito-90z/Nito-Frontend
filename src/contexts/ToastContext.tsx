'use client';

import Toast from '@/components/common/Toast';
import ToastPortal from '@/components/common/ToastPortal';
import { useToastStore } from '@/stores/toast';

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
          <Toast text={text} />
        </ToastPortal>
      )}
    </>
  );
}
