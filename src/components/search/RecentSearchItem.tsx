import CloseIcon from '../common/icons/CloseIcon';

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
  onDelete: (value: string) => void;
};

export default function RecentSearchItem({
  keyword,
  setKeyword,
  onDelete,
}: Props) {
  return (
    <li className="flex items-center justify-between px-4 duration-75 hover:bg-neutral-100">
      <button
        className="grow py-2 text-start leading-7 text-dark-gray"
        onClick={() => setKeyword(keyword)}
      >
        {keyword}
      </button>
      <button className="py-2" onClick={() => onDelete(keyword)}>
        <CloseIcon />
      </button>
    </li>
  );
}
