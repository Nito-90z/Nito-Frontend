import { createPortal } from 'react-dom';

export default function ToastPortal({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window === 'undefined') {
    return null;
  }

  const modal = document.getElementById('toast') as HTMLElement;

  return createPortal(children, modal);
}
