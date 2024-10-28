export default function Skeleton() {
  return (
    <div className="h-full max-h-[calc(100%-232px)]">
      <ul className="flex animate-pulse flex-col gap-5 p-4">
        {[...new Array(10)].map((_, index) => (
          <li key={index} className="flex gap-4">
            <div className="h-20 w-20 rounded bg-platinum" />
            <div className="flex grow flex-col gap-5">
              <div className="flex gap-3">
                <div className="h-10 w-full bg-platinum" />
                <div className="h-7 w-7 bg-platinum" />
              </div>
              <div className="h-6 bg-platinum" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
