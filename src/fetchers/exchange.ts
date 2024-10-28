import { clientInstance } from '@/libs/instance.client';
import { ExchangeRate } from '@/models/exchange';

export async function getExchangeRateFetcher(): Promise<ExchangeRate> {
  return clientInstance.get('/api/exchange').then((res) => res.data);
}
