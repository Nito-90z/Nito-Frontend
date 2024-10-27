'use client';

import { useEffect, useState } from 'react';
import SearchBar from '../header/SearchBar';
import { twMerge } from 'tailwind-merge';
import RecentSearch from './RecentSearch';
// import AutoKeywords from './AutoKeywords';
import { useProductQueryStore } from '@/stores/productQuery';
import SearchProducts from './SearchProducts';
import { useRecentSearchStore } from '@/stores/recentSearch';
import { useForm } from 'react-hook-form';

// // 검색어 자동 완성
// const SEARCH_RESULTS = [
//   '우산',
//   '우주',
//   '우정',
//   '우편',
//   '우울증',
//   '우연히',
//   '우체국',
//   '초우량기업',
//   '영웅주의',
//   '대우조선해양',
//   '교육과정평가원',
//   '공무원연금공단',
//   '우주항공산업',
//   '우주비행사',
//   '우편배달부',
//   '두뇌회전속도',
//   '무궁화호열차',
//   '기후변화적응',
//   '국제우주정거장',
//   '세계자연유산위원회',
// ];

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
  }, []);
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
      {
        isSearchBarFocus && (
          // (watch('keyword') ? (
          //   <AutoKeywords results={SEARCH_RESULTS} />
          // ) : (
          <RecentSearch
            setKeyword={handleRecentSearchClick}
            onDelete={handleRecentSearchesDelete}
            onClear={handleRecentSearchesClear}
          />
        )
        // ))
      }
      <SearchProducts />
    </section>
  );
}
