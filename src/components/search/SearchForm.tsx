'use client';

import { useEffect, useState } from 'react';
import SearchBar from '../header/SearchBar';
import { twMerge } from 'tailwind-merge';
import RecentSearch from './RecentSearch';
import { useProductQueryStore } from '@/stores/productQuery';
import SearchProducts from './SearchProducts';
import { useRecentSearchStore } from '@/stores/recentSearch';
import { useForm } from 'react-hook-form';

export type SearchKeyword = { keyword: string };

export default function SearchForm() {
  const { register, setValue, setFocus, watch, handleSubmit } =
    useForm<SearchKeyword>();
  const [isSearchBarFocus, setIsSearchBarFocus] = useState(false);
  const resetProductQuery = useProductQueryStore.use.resetProductQuery();
  const setProductQuery = useProductQueryStore.use.setProductQuery();
  const addRecentSearch = useRecentSearchStore.use.add();
  const deleteRecentSearch = useRecentSearchStore.use.delete();
  const clearRecentSearch = useRecentSearchStore.use.clear();

  const handleRecentSearchesDelete = (value: string) => {
    deleteRecentSearch(value);
    setIsSearchBarFocus(false);
    setFocus('keyword');
  };
  const handleRecentSearchesClear = () => {
    clearRecentSearch();
    setFocus('keyword');
  };
  const handleRecentSearchClick = (value: string) => {
    setValue('keyword', value);
    addRecentSearch(value);
    setProductQuery('search', value);
    setIsSearchBarFocus(false);
  };

  useEffect(() => {
    resetProductQuery();
    setProductQuery('search', '_initial_no_results');

    return () => resetProductQuery();
  }, [resetProductQuery, setProductQuery]);
  return (
    <section
      className={twMerge(
        'flex h-full flex-col gap-5',
        watch('keyword') && !isSearchBarFocus && 'gap-0',
      )}
    >
      <SearchBar
        register={register}
        getKeyword={() => watch('keyword')}
        onSubmit={handleSubmit}
        onClear={() => setValue('keyword', '')}
        setFocus={() => setFocus('keyword')}
        setIsSearchBarFocus={setIsSearchBarFocus}
      />
      {isSearchBarFocus && (
        <RecentSearch
          setKeyword={handleRecentSearchClick}
          onDelete={handleRecentSearchesDelete}
          onClear={handleRecentSearchesClear}
        />
      )}
      <SearchProducts />
    </section>
  );
}
