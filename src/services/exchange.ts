import { serverInstance } from '@/libs/instance.server';

export async function getExchangeRate() {
  return serverInstance.get('/v1/exchange/latest/').then((res) => res.data);
}
