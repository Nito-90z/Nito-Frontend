import { FormEvent } from "react";
import MoreIcon from "../common/icons/MoreIcon";
import Input from "../common/Input";
import CloseIcon from "../common/icons/CloseIcon";
import { useRouter } from "next/navigation";

type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

export default function SearchBar({
  placeholder,
  value,
  setValue,
  onSubmit,
}: Props) {
  const router = useRouter();

  return (
    <header className="flex items-center gap-3 px-4 py-[9px] w-full bg-white">
      <button onClick={() => router.back()}>
        <MoreIcon />
      </button>
      <form onSubmit={onSubmit} className="flex grow gap-3">
        <div className="relative grow">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            className="pl-4 pr-9 placeholder:text-gray placeholder:font-normal bg-platinum font-normal rounded-sm"
            type="search"
          />
          {value && (
            <button
              type="button"
              className="absolute top-0 bottom-0 right-3"
              onClick={() => setValue("")}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <button className="text-dark-gray whitespace-nowrap">검색</button>
      </form>
    </header>
  );
}
