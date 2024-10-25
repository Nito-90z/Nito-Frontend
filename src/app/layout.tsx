import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '../css/index.css';
import QueryProvider from '@/contexts/QueryContext';
import ModalProvider from '@/contexts/ModalContext';
import ToastProvider from '@/contexts/ToastContext';

export const metadata: Metadata = {
  title: 'Nito',
  description: 'Amazon Price Monitoring Service',
};

const pretendard = localFont({
  src: '../assets/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} h-dvh w-screen content-center bg-[#ECECEC] font-pretendard`}
      >
        <QueryProvider>
          <ModalProvider>
            <ToastProvider>
              <main className="relative mx-auto flex h-full max-h-dvh w-full min-w-[360px] max-w-[430px] flex-col bg-white">
                {children}
                <div id="modal" />
                <div id="toast" />
              </main>
            </ToastProvider>
          </ModalProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
