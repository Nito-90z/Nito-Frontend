import RecentSearchItem from "./RecentSearchItem";
import Button from "../common/Button";

type Props = {
  recentSearches: string[];
  onDelete: (id: number) => void;
  onClear: () => void;
};

export default function RecentSearch({
  recentSearches,
  onDelete,
  onClear,
}: Props) {
  return (
    <div className="flex flex-col gap-2 max-h-[calc(100%-82px)] h-full pb-4">
      <div className="flex justify-between items-center px-4">
        <p className="font-bold text-dark-gray">최근 검색어</p>
        {recentSearches.length !== 0 && (
          <Button
            className="text-sm bg-transparent w-fit h-fit text-dark-gray"
            onClick={onClear}
          >
            전체삭제
          </Button>
        )}
      </div>
      {recentSearches.length === 0 ? (
        <div className="flex justify-center items-center px-4 h-full">
          <p className="text-dark-gray">최근 검색어가 없어요</p>
        </div>
      ) : (
        <ul className="px-4 h-full overflow-y-auto">
          {recentSearches.map((keyword, index) => (
            <RecentSearchItem
              key={index}
              id={index}
              keyword={keyword}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
