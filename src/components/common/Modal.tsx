type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  const handleBgClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <section
      onClick={handleBgClick}
      className="absolute left-0 top-0 z-[9999] flex h-full w-full items-center justify-center bg-[#1A1A1A] bg-opacity-20"
    >
      <div className="mx-4 w-full rounded-lg bg-white">{children}</div>
    </section>
  );
}
