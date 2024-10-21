import { addFavoriteProductFetcher } from "@/fetchers/product";
import { useProductQueryStore } from "@/stores/productQuery";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const productQuery = useProductQueryStore.use.productQuery();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => addFavoriteProductFetcher(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", productQuery] });
    },
  });
}
