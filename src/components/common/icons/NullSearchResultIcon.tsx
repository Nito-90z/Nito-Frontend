import Image from 'next/image';
import nullSearchResultIcon from '../../../../public/images/null-search.svg';

export default function NullSearchResultIcon() {
  return (
    <Image
      src={nullSearchResultIcon}
      alt="No search result"
      width={80}
      height={80}
    />
  );
}
