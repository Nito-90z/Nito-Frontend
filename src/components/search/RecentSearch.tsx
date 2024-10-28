import RecentSearchItem from './RecentSearchItem';
import Button from '../common/Button';
import { useModalStore } from '@/stores/modal';
import RecentSearchDeleteModal from './RecentSearchDeleteModal';
import { v4 as uuidv4 } from 'uuid';
import { useRecentSearchStore } from '@/stores/recentSearch';

type Props = {
  setKeyword: (value: string) => void;
  onDelete: (value: string) => void;
  onClear: () => void;
};

export default function RecentSearch({ setKeyword, onDelete, onClear }: Props) {
  const setModal = useModalStore.use.setModal();
  const recentSearches = useRecentSearchStore.use.recentSearches();

  const handleDeleteAll = () => {
    setModal(<RecentSearchDeleteModal onClear={onClear} />);
  };
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
        <ul className="h-full overflow-y-auto">
          {recentSearches.map((keyword) => (
            <RecentSearchItem
              key={uuidv4()}
              keyword={keyword}
              setKeyword={setKeyword}
              onDelete={onDelete}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
