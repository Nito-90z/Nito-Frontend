import { EXCHANGE_RATE } from '@/constants';

export function convertDollarToWon(
  dollarAmount: string,
  exchangeRate: string = EXCHANGE_RATE,
) {
  const koreanUnits = ['조', '억', '만', ''];
  const unit = 10000;
  let answer = '';
  let number = Number(dollarAmount) * Number(exchangeRate);

  while (number > 0) {
    const mod = Math.trunc((number % unit) * 100) / 100;
    const modToString = mod.toString().replace(/(\d)(\d{3})/, '$1,$2');
    number = Math.floor(number / unit);
    answer = ` ${modToString}${koreanUnits.pop()}${answer}`;
  }
  return `${answer}원`;
}
