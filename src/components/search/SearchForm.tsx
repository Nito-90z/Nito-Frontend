'use client';

import { useEffect, useState } from 'react';
import SearchBar from '../header/SearchBar';
import { twMerge } from 'tailwind-merge';
import RecentSearch from './RecentSearch';
import AutoKeywords from './AutoKeywords';
import { useProductQueryStore } from '@/stores/productQuery';
import SearchProducts from './SearchProducts';

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
  const [keyword, setKeyword] = useState('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearchBarFocus, setIsSearchBarFocus] = useState(false);
  const resetProductQuery = useProductQueryStore.use.resetProductQuery();
  const setProductQuery = useProductQueryStore.use.setProductQuery();

  const handleRecentSearchesDelete = (id: number) => {
    setRecentSearches((prev) => prev.filter((_, index) => id !== index));
  };
  const handleRecentSearchesClear = () => {
    setRecentSearches([]);
    localStorage.setItem('recentSearches', JSON.stringify([]));
  };
  const handleSubmit = () => {
    const word = keyword.trim();
    if (word === '') return;

    setRecentSearches((prev) => {
      if (prev.includes(word)) {
        return [word, ...prev.filter((k) => k !== word)];
      }
      return [word, ...prev];
    });
    setProductQuery('search', word);
  };

  // 초기에 데이터가 비어있는 동안에 어떻게 보여줄지. 수정
  useEffect(() => {
    resetProductQuery();
    setProductQuery('search', '_initial_no_results');
    const recentSearches = localStorage.getItem('recentSearches') || '[]';
    setRecentSearches(JSON.parse(recentSearches));

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
            recentSearches={recentSearches}
            onDelete={handleRecentSearchesDelete}
            onClear={handleRecentSearchesClear}
          />
        ))}
      <SearchProducts />
    </section>
  );
}
