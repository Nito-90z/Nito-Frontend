import { IOS_PATTERN } from "@/constants";

export function checkDevice(value: string) {
  return IOS_PATTERN.test(value);
}
