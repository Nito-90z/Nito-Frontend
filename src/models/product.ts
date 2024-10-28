export type CategoryItem = {
  id: number | null;
  enTitle: string;
};

export type CategoryPage = {
  count: number;
  cursor: string | null;
  results: CategoryItem[];
};

export type Ordering = 'present_price' | '-discount_rate' | null;

export type ProductQuery = {
  page_size: number;
  category_id: number | null;
  is_lowest_price_ever: boolean | null;
  is_out_of_stock: boolean | null;
  ordering: Ordering;
  search: string | null;
};

export type ProductMetaData = {
  title: string;
  image: string | null;
};

export type Product = {
  id: number; // 상품의 고유 ID
  image: string | null; // 상품 이미지 (nullable 가능성)
  title: string;
  isOutOfStock: boolean; // 품절 여부
  presentPrice: string; // 현재가 (소수점 2자리까지 허용)
  isLowestPriceEver: boolean; // 역대 최저가 상품 여부
  discountRate: number; // 할인율
  isStopSelling: boolean; // 판매 중지 상품 여부
  price: string; // 원가 (소수점 2자리까지 허용)
  code: string; // 아마존 상품 코드
  crawlingUpdatedAt: Date | null; // 최근 크롤링 일자 (nullable 가능성)
  isFavorite: boolean; // 찜한 상품 여부
  affiliateUrl: string; // 아마존 어필리에이트 URL
  presentPriceUpdatedAt: Date; // 현재가 업데이트 일자
};

export type DetailProduct = Product & {
  favoriteId: number | null;
  isAlarm: boolean;
  optionStatus: boolean;
};

export type FavoriteProductQuery = {
  page_size: number;
  ordering: Ordering;
};

export type FavoriteProductInfo = Omit<
  Product,
  | 'price'
  | 'code'
  | 'crawlingUpdatedAt'
  | 'isFavorite'
  | 'affiliateUrl'
  | 'presentPriceUpdatedAt'
>;

export type FavoriteProduct = {
  id: number; // 필수, 읽기 전용
  product: FavoriteProductInfo;
  isAlarm: boolean; // 알림 여부 (nullable, 선택적)
};

export type ProductPrice = {
  id: number;
  presentPrice: string | null;
  lowPrice: string | null;
  highPrice: string | null;
  lowPriceUpdatedAt: Date;
  highPriceUpdatedAt: Date;
  presentPriceUpdatedAt: Date;
  averagePrice: string;
};
