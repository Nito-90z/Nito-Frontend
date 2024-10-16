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
      className="absolute top-0 left-0 flex justify-center items-center w-full h-full bg-[#1A1A1A] bg-opacity-20 z-[9999]"
    >
      <div className="mx-4 w-full bg-white rounded-lg">{children}</div>
    </section>
  );
}
