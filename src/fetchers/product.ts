import { clientInstance } from "@/libs/instance.client";
import { ProductQuery } from "@/models/product";

export async function getProductsFetcher({
  cursor,
  query,
}: {
  cursor: string | null;
  query: ProductQuery;
}) {
  const queryParams = new URLSearchParams();

  if (cursor) {
    queryParams.append("cursor", String(cursor));
  }

  Object.entries(query).forEach(([key, value]) => {
    if (value !== null) {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  const url = queryString ? `product?${queryString}` : "product";

  return clientInstance.get(`/api/${url}`).then((res) => res.data);
}
