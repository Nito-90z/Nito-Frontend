import RecentSearchItem from './RecentSearchItem';
import Button from '../common/Button';
import { MouseEvent, useEffect } from 'react';
import { useModalStore } from '@/stores/modal';
import RecentSearchDeleteModal from './RecentSearchDeleteModal';

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
  const setModal = useModalStore.use.setModal();

  const handleDeleteAll = () => {
    setModal(<RecentSearchDeleteModal onClear={onClear} />);
  };

  useEffect(() => {
    if (recentSearches.length === 0) return;

    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);
  return (
    <div className="absolute top-[82px] z-10 flex h-full max-h-[calc(100%-82px)] w-full flex-col gap-2 bg-white pb-4">
      <div className="flex items-center justify-between px-4">
        <p className="font-bold text-dark-gray">최근 검색어</p>
        {recentSearches.length !== 0 && (
          <Button
            className="h-fit w-fit bg-transparent text-sm text-dark-gray"
            onClick={handleDeleteAll}
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
