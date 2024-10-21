import { clientInstance } from "@/libs/instance.client";
import { DetailProduct, ProductQuery } from "@/models/product";

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

export async function addFavoriteProductFetcher(productId: number) {
  return clientInstance
    .post("/api/favorite-product", { productId })
    .then((res) => res.data);
}

export async function getProductFetcher(
  productId: number
): Promise<DetailProduct> {
  return clientInstance
    .get(`/api/product/${productId}`)
    .then((res) => res.data);
}
