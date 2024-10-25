import NullSearchResultIcon from '../common/icons/NullSearchResultIcon';

export default function NullProductList() {
  return (
    <div className="flex h-full max-h-[calc(100%-82px)] flex-col items-center justify-center text-center text-[#555555]">
      <NullSearchResultIcon />
      <p className="leading-7">검색 결과가 없어요!</p>
    </div>
  );
}
