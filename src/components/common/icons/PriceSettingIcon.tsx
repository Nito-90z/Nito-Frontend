import Image from 'next/image';
import priceSetting from '../../../../public/images/price-setting.svg';

export default function PriceSettingIcon() {
  return (
    <Image src={priceSetting} alt="price setting" width={126} height={170} />
  );
}
