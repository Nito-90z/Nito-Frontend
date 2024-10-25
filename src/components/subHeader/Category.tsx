import { RefObject, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import MoreUpIcon from '../common/icons/MoreUpIcon';
import MoreDownIcon from '../common/icons/MoreDownIcon';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getCategoryFetcher } from '@/fetchers/category';
import { CategoryItem } from '@/models/product';
import { useProductQueryStore } from '@/stores/productQuery';
import { useInView } from 'react-intersection-observer';

export default function Category({
  topRef,
}: {
  topRef: RefObject<HTMLDivElement>;
}) {
  const {
    data: categories,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: ['category'],
    queryFn: ({ pageParam }) => getCategoryFetcher(pageParam, 20),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.cursor,
    select: (data) => data.pages.map((page) => page.results),
    staleTime: 60 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  const [isOpen, setIsOpen] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });
  const productQuery = useProductQueryStore.use.productQuery();
  const setProductQuery = useProductQueryStore.use.setProductQuery();

  const handleSelect = (id: number | null) => {
    setProductQuery('category_id', id);
    setIsOpen(false);
    if (topRef) {
      topRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <div className="relative mb-4 inline-block w-full">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={twMerge(
          'flex w-full items-center justify-between rounded-sm border border-border bg-white px-4 py-[10px] text-sm focus:outline-none',
          isOpen && 'border-b-transparent',
        )}
      >
        <span>
          {findSelectedCategory(categories, productQuery.category_id)}
        </span>
        <span>{isOpen ? <MoreUpIcon /> : <MoreDownIcon />}</span>
      </button>
      {isOpen && (
        <ul className="absolute z-30 max-h-60 w-full overflow-auto rounded-sm border border-t-0 border-border bg-white">
          {categories &&
            categories.map((page) =>
              page.map(({ id, enTitle }: CategoryItem) => (
                <li key={id}>
                  <button
                    className="w-full px-4 py-[10px] text-start text-sm text-gray disabled:bg-neutral-100"
                    onClick={() => handleSelect(id)}
                    disabled={id === productQuery.category_id}
                  >
                    {enTitle}
                  </button>
                </li>
              )),
            )}
          <div ref={ref} />
        </ul>
      )}
    </div>
  );
}

function findSelectedCategory(
  categoryResults: CategoryItem[][] | undefined,
  id: number | null,
) {
  if (!categoryResults || !id) return 'All';

  const categories = categoryResults.flat();
  const category = categories.find((category) => category.id === id);
  return category?.enTitle;
}
