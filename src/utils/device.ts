import { IOS_PATTERN } from "@/constants/regex";

export function checkDevice(value: string) {
  return IOS_PATTERN.test(value);
}
