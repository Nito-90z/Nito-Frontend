import { FocusEvent } from 'react';
import MoreIcon from '../common/icons/MoreIcon';
import Input from '../common/Input';
import CloseIcon from '../common/icons/CloseIcon';
import { useRouter } from 'next/navigation';
import { UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { SearchKeyword } from '../search/SearchForm';
import { useProductQueryStore } from '@/stores/productQuery';
import { useRecentSearchStore } from '@/stores/recentSearch';

type Props = {
  register: UseFormRegister<SearchKeyword>;
  getKeyword: () => string;
  onSubmit: UseFormHandleSubmit<SearchKeyword, undefined>;
  onClear: () => void;
  setFocus: () => void;
  setIsSearchBarFocus: (value: boolean) => void;
};

export default function SearchBar({
  register,
  getKeyword,
  onSubmit,
  onClear,
  setFocus,
  setIsSearchBarFocus,
}: Props) {
  const router = useRouter();
  const setProductQuery = useProductQueryStore.use.setProductQuery();
  const addRecentSearch = useRecentSearchStore.use.add();

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget && e.relatedTarget.tagName === 'BUTTON') return;

    setIsSearchBarFocus(false);
  };
  const handleDeleteClick = () => {
    onClear();
    setFocus();
    setProductQuery('search', '');
  };
  const handleSubmit = (data: SearchKeyword) => {
    const value = data.keyword;
    addRecentSearch(value);
    setProductQuery('search', value);
  };
  return (
    <header className="flex w-full items-center gap-3 bg-white px-4 py-[9px]">
      <button onClick={() => router.back()}>
        <MoreIcon />
      </button>
      <form onSubmit={onSubmit(handleSubmit)} className="flex grow gap-3">
        <div className="relative grow">
          <Input
            type="search"
            className="rounded-sm bg-platinum pl-4 pr-9 font-normal placeholder:font-normal placeholder:text-gray"
            {...register('keyword', { required: true })}
            placeholder="상품명 검색"
            onBlur={handleBlur}
            onFocus={() => setIsSearchBarFocus(true)}
            autoComplete="off"
          />
          {getKeyword() && (
            <button
              type="button"
              className="absolute bottom-0 right-3 top-0"
              onClick={handleDeleteClick}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <button
          className="whitespace-nowrap px-1 text-dark-gray disabled:text-gray"
          disabled={!getKeyword()}
          onClick={() => setIsSearchBarFocus(false)}
        >
          검색
        </button>
      </form>
    </header>
  );
}
