export default function Toast2({ text }: { text: string }) {
  return (
    <div className="absolute bottom-8 text-center w-full z-50">
      <div className="mx-[15px] py-4 bg-dark-gray">
        <p className="text-sm text-[#FFFFFF]">{text}</p>
      </div>
    </div>
  );
}
