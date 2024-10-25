import {
  deleteFavoriteProductsFetcher,
  getFavoriteProductsFetcher,
  setFavoriteProductAlarmFetcher,
} from "@/fetchers/product";
import { FavoriteProduct, FavoriteProductQuery } from "@/models/product";
import { useToastStore } from "@/stores/toast";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export default function useFavoriteProduct(query: FavoriteProductQuery) {
  const queryClient = useQueryClient();
  const setToast = useToastStore.use.setToast();

  const { data, isLoading, fetchNextPage, hasNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: ["favorite_products", query],
      queryFn: ({ pageParam }) =>
        getFavoriteProductsFetcher({ cursor: pageParam, query }),
      initialPageParam: null,
      getNextPageParam: (lastPage) => lastPage.cursor,
      select: (data) => data.pages,
      placeholderData: keepPreviousData,
      refetchOnWindowFocus: false,
    });

  const { mutateAsync: deleteFavoriteProduct } = useMutation({
    mutationFn: ({ ids }: { ids: number[] }) =>
      deleteFavoriteProductsFetcher(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite_products", query] });
      setToast("찜한 상품에서 삭제했어요!");
      setTimeout(() => setToast(null), 3000);
    },
  });

  const { mutate: setFavoriteProductAlarm } = useMutation({
    mutationFn: ({ id, isAlarm }: { id: number; isAlarm: boolean }) =>
      setFavoriteProductAlarmFetcher(id, isAlarm),
    onSuccess: (data: FavoriteProduct) => {
      queryClient.invalidateQueries({ queryKey: ["favorite_products", query] });
      setToast(data.isAlarm ? "알람을 켰어요!" : "알람을 껐어요!");
      setTimeout(() => setToast(null), 3000);
    },
  });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    deleteFavoriteProduct,
    setFavoriteProductAlarm,
  };
}
