type Props = {
  results: string[];
};

export default function AutoKeywords({ results }: Props) {
  return (
    <ul className="absolute top-[82px] z-10 h-full max-h-[calc(100%-82px)] w-full overflow-y-auto bg-white px-4">
      {results.map((result) => (
        <li key={result}>
          <button className="w-full py-2 text-start leading-7 text-dark-gray">
            {result}
          </button>
        </li>
      ))}
    </ul>
  );
}
