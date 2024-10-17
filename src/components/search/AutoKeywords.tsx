type Props = {
  results: string[];
};

export default function AutoKeywords({ results }: Props) {
  return (
    <ul className="px-4 overflow-y-auto">
      {results.map((result) => (
        <li key={result}>
          <button className="text-start py-2 w-full text-dark-gray leading-7">
            {result}
          </button>
        </li>
      ))}
    </ul>
  );
}
