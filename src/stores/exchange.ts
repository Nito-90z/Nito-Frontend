import { create } from 'zustand';
import createSelectors from './selectors';
import { ExchangeRate } from '@/models/exchange';
import { EXCHANGE_RATE } from '@/constants';
import { getExchangeRateFetcher } from '@/fetchers/exchange';

type ExchangeRateState = {
  exchangeRate: ExchangeRate;
  fetchExchangeRate: () => Promise<void>;
};

const exchangeRateStore = create<ExchangeRateState>()((set) => {
  const fetchExchangeRate = async () => {
    try {
      const data = await getExchangeRateFetcher();

      set({ exchangeRate: data });
    } catch (error) {
      console.error('Failed to fetch exchange rate:', error);
    }
  };

  fetchExchangeRate();
  setInterval(fetchExchangeRate, 30 * 60 * 1000);

  return {
    exchangeRate: {
      usdToKrw: EXCHANGE_RATE,
      createdAt: new Date('2024-06-27T10:42:54.451916+09:00'),
    },
    fetchExchangeRate,
  };
});

export const useExchangeRateStore = createSelectors(exchangeRateStore);
