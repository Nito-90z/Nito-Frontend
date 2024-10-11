import Image from 'next/image';
import searchIcon from '../../../../public/images/search.svg'
export default function SearchIcon() {
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