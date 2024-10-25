import {
  deleteFavoriteProductsFetcher,
  getFavoriteProductsFetcher,
} from "@/fetchers/product";
import { FavoriteProductQuery } from "@/models/product";
import {
  keepPreviousData,
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

export default function useFavoriteProduct(query: FavoriteProductQuery) {
  const queryClient = useQueryClient();
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

  const { mutateAsync } = useMutation({
    mutationFn: ({ ids }: { ids: number[] }) =>
      deleteFavoriteProductsFetcher(ids),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favorite_products", query] });
    },
  });

  return {
    data,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetching,
    mutateAsync,
  };
}
