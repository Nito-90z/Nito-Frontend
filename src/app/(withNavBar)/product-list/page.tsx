import SubHeader from '@/components/header/SubHeader';
import Products from '@/components/products/Products';
import { getCategory } from '@/services/category';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

export default async function ProductListPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ['category'],
    queryFn: ({ pageParam }) => getCategory(pageParam, 20),
    initialPageParam: null,
    staleTime: 60 * 60 * 1000,
    getNextPageParam: (lastPage) => lastPage.cursor,
    pages: 3,
  });
  return (
    <section className="h-full overflow-y-auto">
      <SubHeader text="상품 리스트" />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Products />
      </HydrationBoundary>
    </section>
  );
}
