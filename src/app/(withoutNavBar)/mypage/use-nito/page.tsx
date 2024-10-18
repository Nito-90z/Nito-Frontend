import SubHeader from '@/components/header/SubHeader';
import PriceSetting from '@/components/myPage/PriceSetting';
import ProductMenual from '@/components/myPage/ProductMenual';
import SelectButton from '@/components/myPage/SelectButton';

export default function UseNitopage() {
  return (
    <>
      <SubHeader text='니토 사용법' />
      <SelectButton />
      <PriceSetting />
      <ProductMenual />
    </>
  );
}