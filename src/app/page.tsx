import DefaultHeader from '@/components/header/DefaultHeader';
import SearchBar from '@/components/header/SearchBar';
import SearchBarComplete from '@/components/header/SearchBarComplete';
import SelectHeader from '@/components/header/SelectHeader';
import SubHeader from '@/components/header/SubHeader';
import ProductList from "@/components/ProductList";
import Category from '@/components/subHeader/Category';
import DetailOption from '@/components/subHeader/DetailOption';
import Main from '@/components/subHeader/Main';

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
//     isFavorite: false,
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
//     isFavorite: false,
//     affiliateUrl: "https://amazon.com/product5",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 6,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Bluetooth Speaker",
//       koTitle: "블루투스 스피커",
//     },
//     isOutOfStock: false,
//     presentPrice: "59.99",
//     price: "79.99",
//     isLowestPriceEver: true,
//     discountRate: 25,
//     code: "B093T8MVSK",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product6",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 7,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Noise Cancelling Headphones",
//       koTitle: "소음 제거 헤드폰",
//     },
//     isOutOfStock: false,
//     presentPrice: "299.99",
//     price: "349.99",
//     isLowestPriceEver: true,
//     discountRate: 14,
//     code: "B098VXYZQW",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: false,
//     affiliateUrl: "https://amazon.com/product7",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 8,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Smartphone Stand",
//       koTitle: "스마트폰 거치대",
//     },
//     isOutOfStock: true,
//     presentPrice: "9.99",
//     price: "14.99",
//     isLowestPriceEver: true,
//     discountRate: 33,
//     code: "B08KSM1FXP",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: false,
//     affiliateUrl: "https://amazon.com/product8",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 9,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "USB-C Hub",
//       koTitle: "USB-C 허브",
//     },
//     isOutOfStock: false,
//     presentPrice: "29.99",
//     price: "39.99",
//     isLowestPriceEver: false,
//     discountRate: 25,
//     code: "B089FSKZZT",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: true,
//     affiliateUrl: "https://amazon.com/product9",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
//   {
//     id: 10,
//     image:
//       "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1hY3xlbnwwfHwwfHx8MA%3D%3D",
//     title: {
//       enTitle: "Wireless Mouse",
//       koTitle: "무선 마우스",
//     },
//     isOutOfStock: false,
//     presentPrice: "19.99",
//     price: "29.99",
//     isLowestPriceEver: false,
//     discountRate: 33,
//     code: "B091PZLVKV",
//     crawlingUpdatedAt: "2024-10-09T10:00:00Z",
//     isFavorite: false,
//     affiliateUrl: "https://amazon.com/product10",
//     isStopSelling: false,
//     presentPriceUpdatedAt: "2024-10-08T10:00:00Z",
//   },
// ];

// test
export default function HomePage() {
  return <div>{/* <ProductList products={PRODUCTS} /> */}
  <DefaultHeader/>
  <SelectHeader mainText={'마이 페이지'} buttonText={'완료'}/>
  <SubHeader text={'마이페이지'} />
  
  </div>;
}
