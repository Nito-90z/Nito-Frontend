import SubHeader from '@/components/header/SubHeader';
import PriceSetting from '@/components/myPage/PriceSetting';
import ProductMenual from '@/components/myPage/ProductMenual';
import SelectButton from '@/components/myPage/SelectButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Nito 사용법',
  description: 'Nito의 사용법을 알아보세요!',
};

export default function UseNitopage() {
  return (
    <>
      <SubHeader text="니토 사용법" />
      <SelectButton />
      <PriceSetting />
      <ProductMenual />
    </>
  );
}
