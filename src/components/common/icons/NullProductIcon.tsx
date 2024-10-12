import Image from "next/image";
import nullProductIcon from "../../../../public/images/null-product.svg";

export default function NullProductIcon() {
  return (
    <Image src={nullProductIcon} alt="heart" width={27.16} height={21.58} />
  );
}
