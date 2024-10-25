import { serverInstance } from "@/libs/instance.server";

export async function getProducts(query: { [k: string]: string | null }) {
  const queryParams = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  const url = queryString ? `product/?${queryString}` : "product/";

  return serverInstance.get(`/v1/${url}`).then((res) => res.data);
}

export async function addFavoriteProduct(productId: number) {
  return serverInstance
    .post("/v1/favorite_product/", { productId })
    .then((res) => res.data);
}

export async function getProduct(productId: number) {
  return serverInstance
    .get(`/v1/product/${productId}/`)
    .then((res) => res.data);
}

export async function getProductPrice(productId: number) {
  return serverInstance
    .get(`/v1/product/${productId}/price_info/`)
    .then((res) => res.data);
}

export async function getRelatedProducts(productId: number) {
  return serverInstance
    .get(`/v1/product/${productId}/related_product_list/`)
    .then((res) => res.data);
}

export async function getFavoriteProducts(query: {
  [k: string]: string | null;
}) {
  const queryParams = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    if (value) {
      queryParams.append(key, String(value));
    }
  });

  const queryString = queryParams.toString();
  const url = queryString
    ? `favorite_product/?${queryString}`
    : "favorite_product/";

  return serverInstance.get(`/v1/${url}`).then((res) => res.data);
}

export async function deleteFavoriteProducts(ids: number[]) {
  serverInstance
    .delete("/v1/favorite_product/delete_multiple/", {
      params: { ids },
      paramsSerializer: (params) => new URLSearchParams(params).toString(),
    })
    .catch(() => new Response("Not Found!", { status: 404 }));
}

export async function setFavoriteProductAlarm(
  productId: number,
  isAlarm: boolean
) {
  return serverInstance
    .put(`/v1/favorite_product/${productId}/`, { isAlarm: !isAlarm })
    .then((res) => res.data);
}
