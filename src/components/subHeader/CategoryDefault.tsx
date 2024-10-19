"use client";

import { twMerge } from "tailwind-merge";
import Category from "./Category";
import SortOptions from "./SortOptions";

export default function CategoryDefault({ className }: { className?: string }) {
  return (
    <div className={twMerge("p-4 pb-2 bg-white z-30", className)}>
      <Category />
      <SortOptions />
    </div>
  );
}
