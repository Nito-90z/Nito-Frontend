import type { Metadata } from "next";
import localFont from "next/font/local";
import "../css/index.css";
import QueryProvider from "@/contexts/QueryContext";

export const metadata: Metadata = {
  title: "Nito",
  description: "Amazon Price Monitoring Service",
};

const pretendard = localFont({
  src: "../assets/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} font-pretendard content-center w-screen h-dvh bg-[#ECECEC]`}
      >
        <QueryProvider>
          <main className="flex flex-col mx-auto max-w-[430px] min-w-[360px] w-full h-full bg-white">
            {/* Header */}
            <div className="grow">{children}</div>
            {/* Footer */}
          </main>
        </QueryProvider>
      </body>
    </html>
  );
}
