'use client';

import { EXCHANGE_RATE } from '@/constants';
import { getExchangeRateFetcher } from '@/fetchers/exchange';
import { ExchangeRate } from '@/models/exchange';
import { useQuery } from '@tanstack/react-query';
import { createContext, useContext } from 'react';

type Props = {
  children: React.ReactNode;
};

const initialExchange = {
  usdToKrw: EXCHANGE_RATE,
  createdAt: new Date('2024-06-27T10:42:54.451916+09:00'),
};

const ExchangeRateContext = createContext<ExchangeRate>(initialExchange);

export function ExchangeRateProvider({ children }: Props) {
  const { data } = useQuery({
    queryKey: ['exchange'],
    queryFn: getExchangeRateFetcher,
  });

  return (
    <ExchangeRateContext.Provider
      value={{
        usdToKrw: data?.usdToKrw || initialExchange.usdToKrw,
        createdAt: data?.createdAt || initialExchange.createdAt,
      }}
    >
      {children}
    </ExchangeRateContext.Provider>
  );
}

export const useExchangeRate = () => useContext(ExchangeRateContext);
