import NavBar from '@/components/nav/NavBar';

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative max-h-[calc(100%-64px)] grow">{children}</div>
      <NavBar />
    </>
  );
}
