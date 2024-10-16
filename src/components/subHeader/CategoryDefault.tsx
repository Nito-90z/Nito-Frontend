"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Category from "./Category";
import SortOptions from "./SortOptions";

export default function CategoryDefault({ className }: { className?: string }) {
  const [selectedOption, setSelectedOption] = useState("Cateogry");

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
