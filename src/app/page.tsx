// 상품 리스트
// const PRODUCTS: Product[] = [
//   {
//     id: 1,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Wireless Earbuds",
//       koTitle: "무선 이어폰",
//     },
//     isOutOfStock: true,
//     presentPrice: "751.99",
//     price: "79.99",
//     isLowestPriceEver: true,
//     discountRate: 38,
//     code: "B089KV4YYX",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: false,
//     affiliateUrl: "https://amazon.com/product1",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 2,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Smart Watch",
//       koTitle: "스마트 시계",
//     },
//     isOutOfStock: false,
//     presentPrice: "199.99",
//     price: "249.99",
//     isLowestPriceEver: false,
//     discountRate: 20,
//     code: "B08J61P5X8",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product2",
//     isStopSelling: true,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 3,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Laptop Sleeve",
//       koTitle: "노트북 슬리브",
//     },
//     isOutOfStock: false,
//     presentPrice: "19.99",
//     price: "29.99",
//     isLowestPriceEver: true,
//     discountRate: 33,
//     code: "B091L7DZZT",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product3",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 4,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Gaming Keyboard",
//       koTitle: "게이밍 키보드",
//     },
//     isOutOfStock: false,
//     presentPrice: "89.99",
//     price: "129.99",
//     isLowestPriceEver: false,
//     discountRate: 31,
//     code: "B07P2R6KBY",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product4",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 5,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Portable Charger",
//       koTitle: "휴대용 충전기",
//     },
//     isOutOfStock: false,
//     presentPrice: "39.99",
//     price: "49.99",
//     isLowestPriceEver: false,
//     discountRate: 20,
//     code: "B088PQVLJG",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product5",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
// ];

// 찜한 상품 리스트
const PRODUCTS: FavoriteProduct[] = [
  {
    id: 1,
    product: {
      id: 101,
      title: {
        enTitle: "Wireless Headphones",
        koTitle: "무선 헤드폰",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "99.99",
      isLowestPriceEver: true,
      isOutOfStock: false,
      discountRate: 10,
      isStopSelling: true,
    },
    isAlarm: true,
  },
  {
    id: 2,
    product: {
      id: 102,
      title: {
        enTitle: "Smartphone",
        koTitle: "스마트폰",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "599.99",
      isLowestPriceEver: false,
      isOutOfStock: false,
      discountRate: 15,
      isStopSelling: false,
    },
    isAlarm: false,
  },
  {
    id: 3,
    product: {
      id: 103,
      title: {
        enTitle: "Bluetooth Speaker",
        koTitle: "블루투스 스피커",
      },
      image: null,
      presentPrice: "49.99",
      isLowestPriceEver: true,
      isOutOfStock: true,
      discountRate: 5,
      isStopSelling: false,
    },
    isAlarm: true,
  },
  {
    id: 4,
    product: {
      id: 104,
      title: {
        enTitle: "Gaming Mouse",
        koTitle: "게이밍 마우스",
      },
      image:
        "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
      presentPrice: "29.99",
      isLowestPriceEver: false,
      isOutOfStock: true,
      discountRate: 20,
      isStopSelling: false,
    },
    isAlarm: false,
  },
  {
    id: 5,
    product: {
      id: 105,
      title: {
        enTitle: "4K Monitor",
        koTitle: "4K 모니터",
      },
      image: null,
      presentPrice: "399.99",
      isLowestPriceEver: true,
      isOutOfStock: false,
      discountRate: 25,
      isStopSelling: false,
    },
    isAlarm: true,
  },
];

import ProductList from "@/components/products/ProductList";
import NullProductList from "@/components/products/wishList/NullProductList";

export default function HomePage() {
  return (
    <section className="h-full">
      {PRODUCTS.length === 0 ? (
        <NullProductList />
      ) : (
        <ProductList products={PRODUCTS} />
      )}
    </section>
  );
}
