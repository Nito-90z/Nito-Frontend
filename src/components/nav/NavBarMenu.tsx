import { usePathname } from "next/navigation";

type Props = {
  menu: {
    title: string;
    value: string;
    path: string;
    onIcon: React.ReactNode;
    offIcon: React.ReactNode;
  };
  onClick: () => void;
};

export default function NavBarMenu({
  menu: { title, path, onIcon, offIcon },
  onClick,
}: Props) {
  const pathname = usePathname();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex flex-col items-center justify-center gap-[2px] ${
        path === pathname ? "text-brand font-bold" : "text-text"
      }`}
    >
      {pathname === path ? onIcon : offIcon}
      <span className="text-xs">{title}</span>
    </button>
  );
}
