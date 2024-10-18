import { authInstance } from "@/libs/instance.authorization";

export async function getCategory(
  cursor: string | null,
  page_size: number = 20
) {
  const cursor_query = cursor ? `cursor=${cursor}&` : "";

  return authInstance
    .get(`/v1/category/?${cursor_query}page_size=${page_size}`)
    .then((res) => res.data);
}
