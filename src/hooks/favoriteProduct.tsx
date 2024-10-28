import {
  addFavoriteProductFetcher,
  deleteFavoriteProductsFetcher,
  getFavoriteProductsFetcher,
  setFavoriteProductAlarmFetcher,
} from '@/fetchers/product';
import { FavoriteProduct } from '@/models/product';
import { useFavoriteQueryStore } from '@/stores/favoriteQuery';
import { useToastStore } from '@/stores/toast';
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query';
import axios from 'axios';

export function useFavoriteProduct() {
  const favoriteQuery = useFavoriteQueryStore.use.favoriteQuery();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ['favorite_products', favoriteQuery],
      queryFn: ({ pageParam }) =>
        getFavoriteProductsFetcher({ cursor: pageParam, query: favoriteQuery }),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.cursor,
      select: (data) => data.pages,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });

  const products: FavoriteProduct[] =
    data?.map((page) => page.results).flat() || [];
  const totalCount = data ? data[0].count : 0;

  return {
    products,
    totalCount,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
}

export function useSetFavoriteProduct(queryKey?: string[]) {
  const queryClient = useQueryClient();
  const setToast = useToastStore.use.setToast();
  const favoriteQuery = useFavoriteQueryStore.use.favoriteQuery();

  const { mutateAsync: addFavoriteProduct } = useMutation({
    mutationFn: ({ id }: { id: number }) => addFavoriteProductFetcher(id),
    onSuccess: () => {
      queryKey && queryClient.invalidateQueries({ queryKey });
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

  const { mutateAsync: deleteFavoriteProduct } = useMutation({
    mutationFn: ({ ids }: { ids: number[] }) =>
      deleteFavoriteProductsFetcher(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: queryKey || ['favorite_products', favoriteQuery],
      });
      setToast('찜한 상품에서 삭제했어요!', 3000);
    },
  });

  const { mutate: setFavoriteProductAlarm } = useMutation({
    mutationFn: ({ id, isAlarm }: { id: number; isAlarm: boolean }) =>
      setFavoriteProductAlarmFetcher(id, isAlarm),
    onSuccess: (data: FavoriteProduct) => {
      queryClient.invalidateQueries({
        queryKey: queryKey || ['favorite_products', favoriteQuery],
      });
      setToast(data.isAlarm ? '알람을 켰어요!' : '알람을 껐어요!', 3000);
    },
  });

  return {
    addFavoriteProduct,
    deleteFavoriteProduct,
    setFavoriteProductAlarm,
  };
}
