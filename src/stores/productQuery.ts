import { create } from 'zustand';
import createSelectors from './selectors';
import { Ordering } from '@/models/product';

type QueryState = {
  productQuery: {
    page_size: number;
    category_id: number | null;
    is_lowest_price_ever: boolean | null;
    is_out_of_stock: boolean | null;
    ordering: Ordering;
    search: string | null;
  };
  setProductQuery: (
    name:
      | 'page_size'
      | 'category_id'
      | 'is_lowest_price_ever'
      | 'is_out_of_stock'
      | 'ordering'
      | 'search',
    value: string | number | boolean | null,
  ) => void;
  resetProductQuery: () => void;
};

const queryStore = create<QueryState>()((set) => ({
  productQuery: {
    page_size: 20,
    category_id: null,
    is_lowest_price_ever: null,
    is_out_of_stock: null,
    ordering: null,
    search: null,
  },
  setProductQuery: (name, value) =>
    set((state) => ({
      productQuery: { ...state.productQuery, [name]: value },
    })),
  resetProductQuery: () =>
    set(() => ({
      productQuery: {
        page_size: 20,
        category_id: null,
        is_lowest_price_ever: null,
        is_out_of_stock: null,
        ordering: null,
        search: null,
      },
    })),
}));

export const useProductQueryStore = createSelectors(queryStore);
