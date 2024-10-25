import RecentSearchItem from './RecentSearchItem';
import Button from '../common/Button';

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
    <div className="flex h-full max-h-[calc(100%-82px)] flex-col gap-2 pb-4">
      <div className="flex items-center justify-between px-4">
        <p className="font-bold text-dark-gray">최근 검색어</p>
        {recentSearches.length !== 0 && (
          <Button
            className="h-fit w-fit bg-transparent text-sm text-dark-gray"
            onClick={onClear}
          >
            전체삭제
          </Button>
        )}
      </div>
      {recentSearches.length === 0 ? (
        <div className="flex h-full items-center justify-center px-4">
          <p className="text-dark-gray">최근 검색어가 없어요</p>
        </div>
      ) : (
        <ul className="h-full overflow-y-auto px-4">
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
