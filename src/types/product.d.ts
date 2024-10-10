type Product = {
  id: number; // 상품의 고유 ID
  image: string | null; // 상품 이미지 (nullable 가능성)
  title: {
    enTitle: string; // 상품명(영문)
    koTitle: string; // 상품명(한글)
  };
  isOutOfStock: boolean; // 품절 여부
  presentPrice: string; // 현재가 (소수점 2자리까지 허용)
  price: string; // 원가 (소수점 2자리까지 허용)
  isLowestPriceEver: boolean; // 역대 최저가 상품 여부
  discountRate: number; // 할인율
  code: string; // 아마존 상품 코드
  crawlingUpdatedAt: string | null; // 최근 크롤링 일자 (nullable 가능성)
  isFavorite: boolean; // 찜한 상품 여부
  affiliateUrl: string; // 아마존 어필리에이트 URL
  isStopSelling: boolean; // 판매 중지 상품 여부
  presentPriceUpdatedAt: string; // 현재가 업데이트 일자
};
