import Image from 'next/image';
import searchIcon from '../../../../public/images/search-brand.svg';

export default function SearchBrandIcon() {
  return <Image src={searchIcon} alt="search" width={22} height={22} />;
}
