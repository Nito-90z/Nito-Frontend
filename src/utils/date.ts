import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ko";

dayjs.extend(relativeTime);
dayjs.locale("ko");

export function parseDateFromNow(time: Date) {
  return dayjs(time).fromNow();
}

export function parseDate(time: Date) {
  return dayjs(time).format("YYYY/MM/DD");
}
