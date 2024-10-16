import Button from "../common/Button";
import CloseIcon from "../common/icons/CloseIcon";

type Props = {
  id: number;
  keyword: string;
  onDelete: (id: number) => void;
};

export default function RecentSearchItem({ id, keyword, onDelete }: Props) {
  return (
    <li className="py-2">
      <Button
        className="flex justify-between items-center bg-transparent h-fit"
        onClick={() => onDelete(id)}
      >
        <span className="text-dark-gray leading-7">{keyword}</span>
        <CloseIcon />
      </Button>
    </li>
  );
}
