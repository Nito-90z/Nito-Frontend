"use client";

import { twMerge } from "tailwind-merge";
import Category from "./Category";
import SortOptions from "./SortOptions";

type Props = { 
  count: number;
  className?: string 
}

export default function CategoryDefault({ count, className }: Props) {
  return (
    <div className={twMerge("p-4 pb-2 bg-white z-30", className)}>
      <Category />
      <SortOptions count={count}/>
    </div>
  );
}
