'use client';

import { useEffect, useRef, useState } from 'react';
import SearchBar from '../header/SearchBar';
import { twMerge } from 'tailwind-merge';
import RecentSearch from './RecentSearch';
import AutoKeywords from './AutoKeywords';
import { useProductQueryStore } from '@/stores/productQuery';
import SearchProducts from './SearchProducts';
import { useRecentSearchStore } from '@/stores/recentSearch';

// 검색어 자동 완성
const SEARCH_RESULTS = [
  '우산',
  '우주',
  '우정',
  '우편',
  '우울증',
  '우연히',
  '우체국',
  '초우량기업',
  '영웅주의',
  '대우조선해양',
  '교육과정평가원',
  '공무원연금공단',
  '우주항공산업',
  '우주비행사',
  '우편배달부',
  '두뇌회전속도',
  '무궁화호열차',
  '기후변화적응',
  '국제우주정거장',
  '세계자연유산위원회',
];

export default function SearchForm() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState('');
  const [isSearchBarFocus, setIsSearchBarFocus] = useState(false);
  const resetProductQuery = useProductQueryStore.use.resetProductQuery();
  const setProductQuery = useProductQueryStore.use.setProductQuery();
  const addRecentSearch = useRecentSearchStore.use.add();
  const deleteRecentSearch = useRecentSearchStore.use.delete();
  const clearRecentSearch = useRecentSearchStore.use.clear();

  const handleRecentSearchesDelete = (value: string) => {
    deleteRecentSearch(value);
    setIsSearchBarFocus(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleRecentSearchesClear = () => {
    clearRecentSearch();
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleRecentSearchClick = (value: string) => {
    setKeyword(value);
    handleSubmit(value);
    setIsSearchBarFocus(false);
  };
  const handleSubmit = (value: string) => {
    const word = value.trim();
    if (word === '') return;

    addRecentSearch(value);
    setProductQuery('search', word);
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
        keyword && !isSearchBarFocus && 'gap-0',
      )}
    >
      <SearchBar
        inputRef={inputRef}
        value={keyword}
        setValue={setKeyword}
        onSubmit={handleSubmit}
        setIsSearchBarFocus={setIsSearchBarFocus}
      />
      {isSearchBarFocus &&
        (keyword ? (
          <AutoKeywords results={SEARCH_RESULTS} />
        ) : (
          <RecentSearch
            setKeyword={handleRecentSearchClick}
            onDelete={handleRecentSearchesDelete}
            onClear={handleRecentSearchesClear}
          />
        ))}
      <SearchProducts />
    </section>
  );
}
