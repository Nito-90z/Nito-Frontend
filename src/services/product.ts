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
