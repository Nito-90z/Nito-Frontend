import { IOS_PATTERN } from '@/constants';

export function checkIosDevice(value: string) {
  return IOS_PATTERN.test(value);
}
