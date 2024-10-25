import Button from '../common/Button';
import CloseIcon from '../common/icons/CloseIcon';

type Props = {
  id: number;
  keyword: string;
  onDelete: (id: number) => void;
};

export default function RecentSearchItem({ id, keyword, onDelete }: Props) {
  return (
    <li className="py-2">
      <Button
        className="flex h-fit items-center justify-between bg-transparent"
        onClick={() => onDelete(id)}
      >
        <span className="leading-7 text-dark-gray">{keyword}</span>
        <CloseIcon />
      </Button>
    </li>
  );
}
