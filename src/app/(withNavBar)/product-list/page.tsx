import SubHeader from '@/components/header/SubHeader';
import Products from '@/components/products/Products';
import { getCategory } from '@/services/category';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '모든 상품 목록',
  description:
    '다양한 카테고리별 상품을 확인해보세요. Nito에서 원하는 상품을 쉽게 찾아보고 비교할 수 있습니다',
};

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
