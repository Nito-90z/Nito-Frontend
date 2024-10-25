type Props = {
  results: string[];
};

export default function AutoKeywords({ results }: Props) {
  return (
    <ul className="overflow-y-auto px-4">
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
