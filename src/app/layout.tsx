import type { Metadata } from "next";
import "../css/index.css";

export const metadata: Metadata = {
  title: "Nito",
  description: "Amazon Price Monitoring Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
