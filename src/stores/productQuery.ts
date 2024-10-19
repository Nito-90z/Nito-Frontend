import { create } from "zustand";
import createSelectors from "./selectors";

type QueryState = {
  productQuery: {
    page_size: number;
    category_id: number | null;
    is_lowest_price_ever: boolean;
    is_out_of_stock: boolean;
    ordering: "present_price" | "-discount_rate" | null;
    search: string | null;
  };
  setProductQuery: (
    name:
      | "page_size"
      | "category_id"
      | "is_lowest_price_ever"
      | "is_out_of_stock"
      | "ordering"
      | "search",
    value: string | number | boolean | null
  ) => void;
};

const queryStore = create<QueryState>()((set) => ({
  productQuery: {
    page_size: 20,
    category_id: null,
    is_lowest_price_ever: false,
    is_out_of_stock: false,
    ordering: null,
    search: null,
  },
  setProductQuery: (name, value) =>
    set((state) => ({
      productQuery: { ...state.productQuery, [name]: value },
    })),
}));

export const useProductQueryStore = createSelectors(queryStore);
