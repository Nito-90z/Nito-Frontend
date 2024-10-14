import Image from 'next/image';
import searchIcon from '../../../../public/images/search-brand.svg'
export default function SearchBrandIcon() {
  return (
    <div>
      <Image
      src={searchIcon}
      alt="search"
      width={30}
      height={30}
    />
    </div>
  );
}