import SubHeader from "@/components/header/SubHeader";
import NullProductList from "@/components/products/NullProductList";
import ProductList from "@/components/products/ProductList";
import CategoryDefault from "@/components/subHeader/CategoryDefault";

// 상품 리스트
const PRODUCTS: Product[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Wireless Earbuds",
      koTitle: "무선 이어폰",
    },
    isOutOfStock: true,
    presentPrice: "751.99",
    price: "79.99",
    isLowestPriceEver: true,
    discountRate: 38,
    code: "B089KV4YYX",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product1",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Smart Watch",
      koTitle: "스마트 시계",
    },
    isOutOfStock: false,
    presentPrice: "199.99",
    price: "249.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B08J61P5X8",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product2",
    isStopSelling: true,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Laptop Sleeve",
      koTitle: "노트북 슬리브",
    },
    isOutOfStock: false,
    presentPrice: "19.99",
    price: "29.99",
    isLowestPriceEver: true,
    discountRate: 33,
    code: "B091L7DZZT",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product3",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Gaming Keyboard",
      koTitle: "게이밍 키보드",
    },
    isOutOfStock: false,
    presentPrice: "89.99",
    price: "129.99",
    isLowestPriceEver: false,
    discountRate: 31,
    code: "B07P2R6KBY",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product4",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Portable Charger",
      koTitle: "휴대용 충전기",
    },
    isOutOfStock: false,
    presentPrice: "39.99",
    price: "49.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B088PQVLJG",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product5",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Wireless Earbuds",
      koTitle: "무선 이어폰",
    },
    isOutOfStock: true,
    presentPrice: "751.99",
    price: "79.99",
    isLowestPriceEver: true,
    discountRate: 38,
    code: "B089KV4YYX",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product1",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Smart Watch",
      koTitle: "스마트 시계",
    },
    isOutOfStock: false,
    presentPrice: "199.99",
    price: "249.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B08J61P5X8",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: false,
    affiliateUrl: "https://amazon.com/product2",
    isStopSelling: true,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Laptop Sleeve",
      koTitle: "노트북 슬리브",
    },
    isOutOfStock: false,
    presentPrice: "19.99",
    price: "29.99",
    isLowestPriceEver: true,
    discountRate: 33,
    code: "B091L7DZZT",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product3",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Gaming Keyboard",
      koTitle: "게이밍 키보드",
    },
    isOutOfStock: false,
    presentPrice: "89.99",
    price: "129.99",
    isLowestPriceEver: false,
    discountRate: 31,
    code: "B07P2R6KBY",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product4",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
    title: {
      enTitle: "Portable Charger",
      koTitle: "휴대용 충전기",
    },
    isOutOfStock: false,
    presentPrice: "39.99",
    price: "49.99",
    isLowestPriceEver: false,
    discountRate: 20,
    code: "B088PQVLJG",
    crawlingUpdatedAt: "2024-10-09T10:00:00Z",
    isFavorite: true,
    affiliateUrl: "https://amazon.com/product5",
    isStopSelling: false,
    presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
  },
];

export default function ProductListPage() {
  return (
    <section className="h-full overflow-y-auto">
      <SubHeader text="상품 리스트" />
      <CategoryDefault className="sticky top-0" />
      {PRODUCTS.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList products={PRODUCTS} />
      )}
    </section>
  );
}
