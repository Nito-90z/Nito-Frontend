import Image from "next/image";
import productIcon from "../../../../public/images/product.svg";

export default function ProductIcon() {
  return <Image src={productIcon} alt="product" width={23.16} height={22} />;
}
