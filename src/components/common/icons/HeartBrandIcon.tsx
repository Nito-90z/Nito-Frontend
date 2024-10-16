import Image from "next/image";
import heartIcon from "../../../../public/images/heart-brand.svg";

export default function HeartBrandIcon() {
  return <Image src={heartIcon} alt="heart" width={25.44} height={20} />;
}
