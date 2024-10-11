import Image from "next/image";
import closeIcon from "../../../../public/images/close.svg";

export default function CloseIcon() {
  return <Image src={closeIcon} alt="close" width={16} height={16} />;
}
