"use client";

import Category from "./Category";
import SortOptions from "./SortOptions";

type Props = {
  count: number;
};

export default function CategoryDefault({ count }: Props) {
  return (
    <div className="sticky top-0 p-4 pb-2 bg-white z-30">
      <Category />
      <SortOptions count={count} />
    </div>
  );
}
