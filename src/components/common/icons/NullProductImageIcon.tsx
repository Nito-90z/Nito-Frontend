import Image from "next/image";
import nullProductIcon from "../../../../public/images/null-product-image.svg";

export default function NullProductImageIcon() {
  return (
    <Image
      src={nullProductIcon}
      alt="photo comming soon"
      width={27.16}
      height={21.58}
    />
  );
}
