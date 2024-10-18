export type Product = {
  id: number; // 상품의 고유 ID
  image: string | null; // 상품 이미지 (nullable 가능성)
  title: {
    enTitle: string; // 상품명(영문)
    koTitle: string; // 상품명(한글)
  };
  isOutOfStock: boolean; // 품절 여부
  presentPrice: string; // 현재가 (소수점 2자리까지 허용)
  isLowestPriceEver: boolean; // 역대 최저가 상품 여부
  discountRate: number; // 할인율
  isStopSelling: boolean; // 판매 중지 상품 여부
  price: string; // 원가 (소수점 2자리까지 허용)
  code: string; // 아마존 상품 코드
  crawlingUpdatedAt: string | null; // 최근 크롤링 일자 (nullable 가능성)
  isFavorite: boolean; // 찜한 상품 여부
  affiliateUrl: string; // 아마존 어필리에이트 URL
  presentPriceUpdatedAt: string; // 현재가 업데이트 일자
};

export type FavoriteProductInfo = Omit<
  Product,
  | "price"
  | "code"
  | "crawlingUpdatedAt"
  | "isFavorite"
  | "affiliateUrl"
  | "presentPriceUpdatedAt"
>;

export type FavoriteProduct = {
  id: number; // 필수, 읽기 전용
  product: FavoriteProductInfo;
  isAlarm: boolean; // 알림 여부 (nullable, 선택적)
};