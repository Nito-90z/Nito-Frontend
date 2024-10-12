import ProductList from "@/components/products/ProductList";
import NullProductList from "@/components/products/wishList/NullProductList";

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
