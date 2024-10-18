import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MoreUpIcon from "../common/icons/MoreUpIcon";
import MoreDownIcon from "../common/icons/MoreDownIcon";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getCategoryFetcher } from "@/fetchers/category";
import { CategoryItem } from "@/models/product";

type Props = {
  selectedOption: CategoryItem;
  setSelectedOption: (item: CategoryItem) => void;
};

export default function Category({ selectedOption, setSelectedOption }: Props) {
  const { data: categories } = useInfiniteQuery({
    queryKey: ["category"],
    queryFn: ({ pageParam }) => getCategoryFetcher(pageParam, 20),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.cursor,
    select: (data) => data.pages.map((page) => page.results),
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: CategoryItem) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div className="relative inline-block mb-4 w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={twMerge(
          "flex w-full items-center justify-between px-4 py-[10px] border border-border rounded-sm bg-white text-sm focus:outline-none",
          isOpen && "border-b-transparent"
        )}
      >
        <span>{selectedOption.enTitle}</span>
        <span>{isOpen ? <MoreUpIcon /> : <MoreDownIcon />}</span>
      </button>
      {isOpen && (
        <ul className="w-full rounded-sm bg-white border border-t-0 border-border max-h-60 absolute overflow-auto z-30">
          {categories &&
            categories.map((page) =>
              page.map(({ id, enTitle }: CategoryItem) => (
                <li key={id}>
                  <button
                    className="text-start px-4 py-[10px] w-full text-sm text-gray disabled:bg-neutral-100"
                    onClick={() => handleSelect({ id, enTitle })}
                    disabled={id === selectedOption.id}
                  >
                    {enTitle}
                  </button>
                </li>
              ))
            )}
        </ul>
      )}
    </div>
  );
}
