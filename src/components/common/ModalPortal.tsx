import { createPortal } from 'react-dom';

export default function ModalPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  // client 상태에서만 실행하기 위해
  if (typeof window === 'undefined') {
    return null;
  }

  const modal = document.getElementById('modal') as HTMLElement;

  return createPortal(children, modal);
}
