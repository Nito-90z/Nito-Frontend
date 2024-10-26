import CloseIcon from '../common/icons/CloseIcon';

type Props = {
  id: number;
  keyword: string;
  onDelete: (id: number) => void;
};

export default function RecentSearchItem({ id, keyword, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between">
      <button className="grow py-2 text-start leading-7 text-dark-gray">
        {keyword}
      </button>
      <button onClick={() => onDelete(id)}>
        <CloseIcon />
      </button>
    </li>
  );
}
