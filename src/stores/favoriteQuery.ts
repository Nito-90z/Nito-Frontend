import { create } from 'zustand';
import createSelectors from './selectors';
import { FavoriteProductQuery, Ordering } from '@/models/product';

type FavoriteQueryState = {
  favoriteQuery: FavoriteProductQuery;
  setFavoriteQuery: (
    name: 'page_size' | 'ordering' | 'search',
    value: number | Ordering,
  ) => void;
  resetFavoriteQuery: () => void;
};

const favoriteQueryStore = create<FavoriteQueryState>()((set) => ({
  favoriteQuery: {
    page_size: 20,
    ordering: null,
  },
  setFavoriteQuery: (name, value) =>
    set((state) => ({
      favoriteQuery: { ...state.favoriteQuery, [name]: value },
    })),
  resetFavoriteQuery: () =>
    set({
      favoriteQuery: {
        page_size: 20,
        ordering: null,
      },
    }),
}));

export const useFavoriteQueryStore = createSelectors(favoriteQueryStore);
