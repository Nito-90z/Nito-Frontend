import Image from 'next/image';
import searchIcon from '../../../../public/images/search.svg';

export default function SearchIcon() {
  return (
    <Image
      src={searchIcon}
      alt="search"
      width={22}
      height={22}
      style={{ width: 22, height: 22 }}
    />
  );
}
