import { addFavoriteProductFetcher } from "@/fetchers/product";
import { useProductQueryStore } from "@/stores/productQuery";
import { useToastStore } from "@/stores/toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export function useAddFavorite() {
  const queryClient = useQueryClient();
  const productQuery = useProductQueryStore.use.productQuery();
  const setToast = useToastStore.use.setToast();

  return useMutation({
    mutationFn: ({ id }: { id: number }) => addFavoriteProductFetcher(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products", productQuery] });
      setToast("상품을 추가했어요", 5000);
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
