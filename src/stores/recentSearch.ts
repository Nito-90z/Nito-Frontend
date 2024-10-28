import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import createSelectors from './selectors';

type RecentSearchState = {
  recentSearches: string[];
  add: (value: string) => void;
  delete: (value: string) => void;
  clear: () => void;
};

const recentSearchesStore = create<RecentSearchState>()(
  persist(
    (set, get) => ({
      recentSearches: [],
      add: (value: string) =>
        set(() => {
          const prev = get().recentSearches;
          if (prev.includes(value)) {
            return {
              recentSearches: [value, ...prev.filter((k) => k !== value)],
            };
          }
          return { recentSearches: [value, ...prev] };
        }),
      delete: (value: string) =>
        set({
          recentSearches: get().recentSearches.filter((k) => k !== value),
        }),
      clear: () => set({ recentSearches: [] }),
    }),
    {
      name: 'recent-searches',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const useRecentSearchStore = createSelectors(recentSearchesStore);
