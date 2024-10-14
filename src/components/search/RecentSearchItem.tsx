import Button from "../common/Button";
import CloseIcon from "../common/icons/CloseIcon";

export default function RecentSearchItem({ keyword }: { keyword: string }) {
  return (
    <li className="py-2">
      <Button className="flex justify-between items-center bg-transparent h-fit">
        <span className="text-dark-gray leading-7">{keyword}</span>
        <CloseIcon />
      </Button>
    </li>
  );
}
