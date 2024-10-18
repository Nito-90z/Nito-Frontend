"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Category from "./Category";
import SortOptions from "./SortOptions";
import { useQueryClient } from "@tanstack/react-query";
import { CategoryPage } from "@/models/product";
import { InfiniteQueryResult } from "@/models/react-query";

export default function CategoryDefault({ className }: { className?: string }) {
  const queryClient = useQueryClient();
  const initialCategories = queryClient.getQueryData<
    InfiniteQueryResult<CategoryPage>
  >(["category"]);
  const [selectedOption, setSelectedOption] = useState({
    enTitle: initialCategories
      ? initialCategories.pages[0].results[0].enTitle
      : "",
    id: initialCategories ? initialCategories.pages[0].results[0].id : null,
  });

  return (
    <div className={twMerge("p-4 pb-2 bg-white z-30", className)}>
      <Category
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <SortOptions />
    </div>
  );
}
