import { FormEvent } from 'react';
import MoreIcon from '../common/icons/MoreIcon';
import Input from '../common/Input';
import CloseIcon from '../common/icons/CloseIcon';
import { useRouter } from 'next/navigation';

type Props = {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  setIsSearchBarFocus: (value: boolean) => void;
};

export default function SearchBar({
  placeholder,
  value,
  setValue,
  onSubmit,
  setIsSearchBarFocus,
}: Props) {
  const router = useRouter();

  return (
    <header className="flex w-full items-center gap-3 bg-white px-4 py-[9px]">
      <button onClick={() => router.back()}>
        <MoreIcon />
      </button>
      <form onSubmit={onSubmit} className="flex grow gap-3">
        <div className="relative grow">
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
            onBlur={() => setIsSearchBarFocus(false)}
            onFocus={() => setIsSearchBarFocus(true)}
            className="rounded-sm bg-platinum pl-4 pr-9 font-normal placeholder:font-normal placeholder:text-gray"
            type="search"
          />
          {value && (
            <button
              type="button"
              className="absolute bottom-0 right-3 top-0"
              onClick={() => setValue('')}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <button className="whitespace-nowrap text-dark-gray">검색</button>
      </form>
    </header>
  );
}
