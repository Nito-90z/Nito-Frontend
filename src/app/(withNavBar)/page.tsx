import FavoriteProducts from '@/components/products/favorite/FavoriteProducts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '찜한 상품 목록',
  description: '내가 찜한 상품들을 한눈에 확인하고 관리하세요',
};

export default function FavoriteProductsPage() {
  return <FavoriteProducts />;
}
