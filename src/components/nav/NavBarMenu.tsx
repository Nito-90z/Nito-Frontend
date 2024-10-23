import { usePathname } from "next/navigation";
import Button from "../common/Button";
import { twMerge } from "tailwind-merge";
import Link from "next/link";

type Props = {
  menu: {
    title: string;
    value: string;
    path: string;
    onIcon: React.ReactNode;
    offIcon: React.ReactNode;
  };
};

export default function NavBarMenu({
  menu: { title, path, onIcon, offIcon },
}: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={path}
      type="button"
      className={twMerge(
        "flex flex-col items-center justify-center gap-[2px] bg-transparent w-fit",
        path === pathname ? "text-brand font-bold" : "text-text"
      )}
    >
      {pathname === path ? onIcon : offIcon}
      <span className="text-xs">{title}</span>
    </Link>
  );
}
