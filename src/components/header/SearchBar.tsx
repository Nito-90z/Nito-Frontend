import { ChangeEvent, FormEvent } from "react";
import MoreIcon from "../common/icons/MoreIcon";
import Input from "../common/Input";

type Props = {
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onClick: () => {};
};

export default function SearchBar({
  placeholder,
  value,
  onChange,
  onSubmit,
  onClick,
}: Props) {
  return (
    <header className="flex items-center gap-3 px-4 py-[9px] w-full bg-white">
      <button onClick={onClick}>
        <MoreIcon />
      </button>
      <form onSubmit={onSubmit} className="flex grow gap-3">
        <Input
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="grow px-4 placeholder:text-gray placeholder:font-normal bg-platinum font-normal rounded-sm"
          type="search"
        />
        <button className="text-dark-gray whitespace-nowrap">검색</button>
      </form>
    </header>
  );
}
