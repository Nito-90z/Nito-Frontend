import Image from "next/image";
import closeLogo from "../../../../public/images/close.svg";

export default function CloseIcon() {
  return <Image src={closeLogo} alt="close" width={24} height={24} />;
}
