import NavBar from "@/components/nav/NavBar";

export default function WithHeaderLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="relative grow max-h-[calc(100%-64px)]">{children}</div>
      <NavBar />
    </>
  );
}
