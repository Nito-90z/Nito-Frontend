"use client";

import SearchBar from "@/components/header/SearchBar";
import RecentSearch from "@/components/search/RecentSearch";
import AutoKeywords from "@/components/search/AutoKeywords";
import { FormEvent, useEffect, useState } from "react";
import ProductList from "@/components/products/ProductList";
import NullProductList from "@/components/search/NullProductList";
import { twMerge } from "tailwind-merge";
import SortOptions from "@/components/subHeader/SortOptions";

// 검색어 자동 완성
const SEARCH_RESULTS = [
  "우산",
  "우주",
  "우정",
  "우편",
  "우울증",
  "우연히",
  "우체국",
  "초우량기업",
  "영웅주의",
  "대우조선해양",
  "교육과정평가원",
  "공무원연금공단",
  "우주항공산업",
  "우주비행사",
  "우편배달부",
  "두뇌회전속도",
  "무궁화호열차",
  "기후변화적응",
  "국제우주정거장",
  "세계자연유산위원회",
];

// 검색 결과 리스트
const PRODUCTS: Product[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Wireless Earbuds",
      koTitle: "무선 이어폰",
    },
    isOutOfStock: true,
    presentPrice: "751.99",
    price: "79.99",
    isLowestPriceEver: true,
    discountRate: 38,
    code: "B089KV4YYX",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product1",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Smart Watch",
      koTitle: "스마트 시계",
    },
    isOutOfStock: false,
    presentPrice: "199.99",
    price: "249.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B08J61P5X8",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product2",
    isStopSelling: true,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Laptop Sleeve",
      koTitle: "노트북 슬리브",
    },
    isOutOfStock: false,
    presentPrice: "19.99",
    price: "29.99",
    isLowestPriceEver: true,
    discountRate: 33,
    code: "B091L7DZZT",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product3",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Gaming Keyboard",
      koTitle: "게이밍 키보드",
    },
    isOutOfStock: false,
    presentPrice: "89.99",
    price: "129.99",
    isLowestPriceEver: false,
    discountRate: 31,
    code: "B07P2R6KBY",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product4",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Portable Charger",
      koTitle: "휴대용 충전기",
    },
    isOutOfStock: false,
    presentPrice: "39.99",
    price: "49.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B088PQVLJG",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product5",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Wireless Earbuds",
      koTitle: "무선 이어폰",
    },
    isOutOfStock: true,
    presentPrice: "751.99",
    price: "79.99",
    isLowestPriceEver: true,
    discountRate: 38,
    code: "B089KV4YYX",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product1",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Smart Watch",
      koTitle: "스마트 시계",
    },
    isOutOfStock: false,
    presentPrice: "199.99",
    price: "249.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B08J61P5X8",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product2",
    isStopSelling: true,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Laptop Sleeve",
      koTitle: "노트북 슬리브",
    },
    isOutOfStock: false,
    presentPrice: "19.99",
    price: "29.99",
    isLowestPriceEver: true,
    discountRate: 33,
    code: "B091L7DZZT",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product3",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Gaming Keyboard",
      koTitle: "게이밍 키보드",
    },
    isOutOfStock: false,
    presentPrice: "89.99",
    price: "129.99",
    isLowestPriceEver: false,
    discountRate: 31,
    code: "B07P2R6KBY",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product4",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Portable Charger",
      koTitle: "휴대용 충전기",
    },
    isOutOfStock: false,
    presentPrice: "39.99",
    price: "49.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B088PQVLJG",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product5",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
];

export default function SearchPage() {
  const [keyword, setKeyword] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [isSearchBarFocus, setIsSearchBarFocus] = useState(true);

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
    // API : 검색 결과 가져오기
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
    <section
      className={twMerge(
        "flex flex-col gap-5 h-full",
        keyword && !isSearchBarFocus && "gap-0"
      )}
    >
      <SearchBar
        placeholder="상품명 검색"
        value={keyword}
        setValue={setKeyword}
        onSubmit={handleSubmit}
        setIsSearchBarFocus={setIsSearchBarFocus}
      />
      {!keyword ? (
        <RecentSearch
          recentSearches={recentSearches}
          onDelete={handleRecentSearchesDelete}
          onClear={handleRecentSearchesClear}
        />
      ) : isSearchBarFocus ? (
        <AutoKeywords results={SEARCH_RESULTS} />
      ) : (
        <div className="max-h-[calc(100%-62px)] h-full overflow-y-auto">
          <SortOptions className="p-4 pb-2" />
          {PRODUCTS.length === 0 ? (
            <NullProductList />
          ) : (
            <ProductList products={PRODUCTS} className="max-h-none" />
          )}
        </div>
      )}
    </section>
  );
}
