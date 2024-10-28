import SearchForm from '@/components/search/SearchForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '상품 검색',
  description:
    'Nito에서 다양한 상품을 검색하고 원하는 조건에 맞는 상품을 쉽게 찾아보세요',
};

export default function SearchPage() {
  return <SearchForm />;
}
