import Image from "next/image";
import shareIcon from "../../../../public/images/share.svg";

export default function ShareIcon() {
  return <Image src={shareIcon} alt="share" width={22} height={22} />;
}
