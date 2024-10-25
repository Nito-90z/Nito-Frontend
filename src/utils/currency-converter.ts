const EXCHANGE_RATE = 1348.62;

export function convertDollarToWon(dollarAmount: string) {
  const koreanUnits = ['조', '억', '만', ''];
  const unit = 10000;
  let answer = '';
  let number = Number(dollarAmount) * EXCHANGE_RATE;

  while (number > 0) {
    const mod = Math.trunc((number % unit) * 100) / 100;
    const modToString = mod.toString().replace(/(\d)(\d{3})/, '$1,$2');
    number = Math.floor(number / unit);
    answer = ` ${modToString}${koreanUnits.pop()}${answer}`;
  }
  return `${answer}원`;
}
