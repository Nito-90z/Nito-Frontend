import { FocusEvent, FormEvent, RefObject } from 'react';
import MoreIcon from '../common/icons/MoreIcon';
import Input from '../common/Input';
import CloseIcon from '../common/icons/CloseIcon';
import { useRouter } from 'next/navigation';

type Props = {
  inputRef: RefObject<HTMLInputElement>;
  value: string;
  setValue: (value: string) => void;
  onSubmit: (value: string) => void;
  setIsSearchBarFocus: (value: boolean) => void;
};

export default function SearchBar({
  inputRef,
  value,
  setValue,
  onSubmit,
  setIsSearchBarFocus,
}: Props) {
  const router = useRouter();

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (e.relatedTarget && e.relatedTarget.tagName === 'BUTTON') return;

    setIsSearchBarFocus(false);
  };
  const handleDeleteClick = () => {
    setValue('');
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit(value);
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
  };
  return (
    <header className="flex w-full items-center gap-3 bg-white px-4 py-[9px]">
      <button onClick={() => router.back()}>
        <MoreIcon />
      </button>
      <form onSubmit={handleSubmit} className="flex grow gap-3">
        <div className="relative grow">
          <Input
            ref={inputRef}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="상품명 검색"
            onBlur={handleBlur}
            onFocus={() => setIsSearchBarFocus(true)}
            className="rounded-sm bg-platinum pl-4 pr-9 font-normal placeholder:font-normal placeholder:text-gray"
            type="search"
          />
          {value && (
            <button
              type="button"
              className="absolute bottom-0 right-3 top-0"
              onClick={handleDeleteClick}
            >
              <CloseIcon />
            </button>
          )}
        </div>
        <button
          className="whitespace-nowrap px-1 text-dark-gray disabled:text-gray"
          disabled={!value}
          onClick={() => setIsSearchBarFocus(false)}
        >
          검색
        </button>
      </form>
    </header>
  );
}
