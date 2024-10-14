"use client";

import SearchResult from "@/components/search/SearchResult";
import { useState } from "react";

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");

  return (
    <section className="flex flex-col gap-5 h-full">
      <input
        type="text"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="h-[62px] bg-brand"
      />
      <SearchResult keyword={keyword} />
    </section>
  );
}
