import {
  addFavoriteProductFetcher,
  getProductsFetcher,
} from '@/fetchers/product';
import { useProductQueryStore } from '@/stores/productQuery';
import { useToastStore } from '@/stores/toast';
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

export default function useProducts() {
  const productQuery = useProductQueryStore.use.productQuery();
  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['products', productQuery],
      queryFn: ({ pageParam }) =>
        getProductsFetcher({ cursor: pageParam, query: productQuery }),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.cursor,
      select: (data) => data.pages,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });

  return { data, isLoading, fetchNextPage, hasNextPage, isFetching };
}

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const productQuery = useProductQueryStore.use.productQuery();
  const setToast = useToastStore.use.setToast();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => addFavoriteProductFetcher(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products', productQuery] });
      setToast('상품을 추가했어요', 5000);
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        if (error.status === 400) {
          setToast(error.response?.data.message, 5000);
        }
      }
    },
  });
}
