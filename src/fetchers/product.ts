import { clientInstance } from "@/libs/instance.client";
import {
  DetailProduct,
  FavoriteProductQuery,
  Product,
  ProductPrice,
  ProductQuery,
} from "@/models/product";

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

export async function getProductPriceFetcher(
  productId: number
): Promise<ProductPrice> {
  return clientInstance
    .get(`/api/product/${productId}/price_info`)
    .then((res) => res.data);
}

export async function getRelatedProductsFetcher(
  productId: number
): Promise<Product[]> {
  return clientInstance
    .get(`/api/product/${productId}/related_product_list`)
    .then((res) => res.data);
}

export async function getFavoriteProductsFetcher({
  cursor,
  query,
}: {
  cursor: string | null;
  query: FavoriteProductQuery;
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
  const url = queryString
    ? `favorite-product?${queryString}`
    : "favorite-product";

  return clientInstance.get(`/api/${url}`).then((res) => res.data);
}

export async function deleteFavoriteProductsFetcher(ids: number[]) {
  return clientInstance
    .delete("/api/favorite-product", {
      params: { ids },
      paramsSerializer: (params) => new URLSearchParams(params).toString(),
    })
    .then((res) => res.data);
}

export async function setFavoriteProductAlarmFetcher(
  productId: number,
  isAlarm: boolean
) {
  return clientInstance
    .put("/api/favorite-product", { productId, isAlarm })
    .then((res) => res.data);
}
