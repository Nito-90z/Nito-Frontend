export default function Skeleton() {
  return (
    <div className="max-h-[calc(100%-232px)] h-full">
      <ul className="flex flex-col gap-5 p-4 animate-pulse">
        {[...new Array(10)].map((_, index) => (
          <li key={index} className="flex gap-4">
            <div className="w-20 h-20 bg-platinum rounded" />
            <div className="grow flex flex-col gap-5">
              <div className="flex gap-3">
                <div className="w-full h-10 bg-platinum" />
                <div className="w-7 h-7 bg-platinum" />
              </div>
              <div className="h-6 bg-platinum" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
