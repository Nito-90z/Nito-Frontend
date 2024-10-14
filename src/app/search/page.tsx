"use client";

import SearchResult from "@/components/search/SearchResult";
import { FormEvent, useEffect, useState } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleRecentSearchesDelete = (id: number) => {
    setRecentSearches((prev) => prev.filter((_, index) => id !== index));
  };
  const handleRecentSearchesClear = () => {
    setRecentSearches([]);
    localStorage.setItem("recentSearches", JSON.stringify([]));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const word = keyword.trim();
    if (word === "") return;

    setRecentSearches((prev) => {
      if (prev.includes(word)) {
        return [word, ...prev.filter((k) => k !== word)];
      }
      return [word, ...prev];
    });
    setKeyword("");
  };

  // 초기에 데이터가 비어있는 동안에 어떻게 보여줄지. 수정
  useEffect(() => {
    const recentSearches = localStorage.getItem("recentSearches") || "[]";
    setRecentSearches(JSON.parse(recentSearches));
  }, []);

  useEffect(() => {
    if (recentSearches.length === 0) return;

    localStorage.setItem("recentSearches", JSON.stringify(recentSearches));
  }, [recentSearches]);
  return (
    <section className="flex flex-col gap-5 h-full">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          className="w-full h-[62px] bg-brand"
        />
      </form>
      <SearchResult
        keyword={keyword}
        recentSearches={recentSearches}
        onDelete={handleRecentSearchesDelete}
        onClear={handleRecentSearchesClear}
      />
    </section>
  );
}
