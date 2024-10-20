"use client";

import { RefObject } from "react";
import Category from "./Category";
import SortOptions from "./SortOptions";

type Props = {
  count: number;
  topRef: RefObject<HTMLDivElement>;
};

export default function CategoryDefault({ count, topRef }: Props) {
  return (
    <div className="sticky top-0 p-4 pb-2 bg-white z-30">
      <Category topRef={topRef} />
      <SortOptions count={count} />
    </div>
  );
}
